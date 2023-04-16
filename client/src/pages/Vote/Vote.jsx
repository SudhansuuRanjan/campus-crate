import React, { useState, useMemo, useEffect } from 'react';
import { useAddress, useContract, useNFTBalance } from "@thirdweb-dev/react";
import { AddressZero } from "@ethersproject/constants";
import { useNavigate } from 'react-router-dom';

const Vote = () => {

    const [proposals, setProposals] = useState([]);
    const [isVoting, setIsVoting] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const address = useAddress();
    const navigate = useNavigate();
    const editionDropAddress = "0xEd86a7F9F1F06b597849E9e2807F588bccCd75eB";
    const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
    const { data: nftBalance } = useNFTBalance(editionDrop, address, "0");
    const { contract: vote } = useContract('0xc8A95Bc1dF176777F52C1F0cD3d7dd93206CEed8', 'vote');
    const { contract: token } = useContract('0xBF9a9f4fF3dA3EA6b17C59b04332eDd89b072C0C', 'token');

    const hasClaimedNFT = useMemo(() => {
        return nftBalance && nftBalance.gt(0)
    }, [nftBalance]);

    if (!hasClaimedNFT) {
        navigate('/');
    }

    const shortenAddress = (str) => {
        return str.substring(0, 6) + '...' + str.substring(str.length - 4);
    };

    useEffect(() => {
        if (!hasClaimedNFT) {
            return;
        }

        // A simple call to vote.getAll() to grab the proposals.
        const getAllProposals = async () => {
            try {
                const proposals = await vote.getAll();
                setProposals(proposals);
                // console.log("🌈 Proposals:", proposals);
            } catch (error) {
                console.log("failed to get proposals", error);
            }
        };
        getAllProposals();
    }, [hasClaimedNFT, vote]);


    return !hasClaimedNFT ? <div className='m-auto flex flex-col items-center justify-center gap-16 p-5'>
        <p>You don't have access to this page. Claim Membership NFT to become a member.</p>
    </div> : (
        <div className="p-4 flex flex-col items-center justify-center">
            <div>
                <div>
                    <h2 className='text-4xl text-purple-500 font-bold mb-16 text-center'>Vote on Proposals</h2>
                    <form
                        className='flex flex-col items-center justify-center gap-5'
                        onSubmit={async (e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            //before we do async things, we want to disable the button to prevent double clicks
                            setIsVoting(true);

                            // lets get the votes from the form for the values
                            const votes = proposals.map((proposal) => {
                                const voteResult = {
                                    proposalId: proposal.proposalId,
                                    //abstain by default
                                    vote: 2,
                                };
                                proposal.votes.forEach((vote) => {
                                    const elem = document.getElementById(
                                        proposal.proposalId + '-' + vote.type,
                                    );

                                    if (elem.checked) {
                                        voteResult.vote = vote.type;
                                        return;
                                    }
                                });
                                return voteResult;
                            });

                            // first we need to make sure the user delegates their token to vote
                            try {
                                //we'll check if the wallet still needs to delegate their tokens before they can vote
                                const delegation = await token.getDelegationOf(address);
                                // if the delegation is the 0x0 address that means they have not delegated their governance tokens yet
                                if (delegation === AddressZero) {
                                    //if they haven't delegated their tokens yet, we'll have them delegate them before voting
                                    await token.delegateTo(address);
                                }
                                // then we need to vote on the proposals
                                try {
                                    await Promise.all(
                                        votes.map(async ({ proposalId, vote: _vote }) => {
                                            // before voting we first need to check whether the proposal is open for voting
                                            // we first need to get the latest state of the proposal
                                            const proposal = await vote.get(proposalId);
                                            // then we check if the proposal is open for voting (state === 1 means it is open)
                                            if (proposal.state === 1) {
                                                // if it is open for voting, we'll vote on it
                                                return vote.vote(proposalId, _vote);
                                            }
                                            // if the proposal is not open for voting we just return nothing, letting us continue
                                            return;
                                        }),
                                    );
                                    try {
                                        // if any of the propsals are ready to be executed we'll need to execute them
                                        // a proposal is ready to be executed if it is in state 4
                                        await Promise.all(
                                            votes.map(async ({ proposalId }) => {
                                                // we'll first get the latest state of the proposal again, since we may have just voted before
                                                const proposal = await vote.get(proposalId);

                                                //if the state is in state 4 (meaning that it is ready to be executed), we'll execute the proposal
                                                if (proposal.state === 4) {
                                                    return vote.execute(proposalId);
                                                }
                                            }),
                                        );
                                        // if we get here that means we successfully voted, so let's set the "hasVoted" state to true
                                        setHasVoted(true);
                                        // and log out a success message
                                        console.log('successfully voted');
                                    } catch (err) {
                                        console.error('failed to execute votes', err);
                                    }
                                } catch (err) {
                                    console.error('failed to vote', err);
                                }
                            } catch (err) {
                                console.error('failed to delegate tokens');
                            } finally {
                                // in *either* case we need to set the isVoting state to false to enable the button again
                                setIsVoting(false);
                            }
                        }}
                    >
                        {proposals.length === 0 ? <p className='py-10'>Loading...</p> : proposals.map((proposal) => (
                            <div key={proposal.proposalId} className="w-[70%] border-gray-700 border rounded-3xl flex flex-col gap-4 p-6 bg-[#07070a]">
                                <h5 className='text-purple-300 font-medium text-lg'>{proposal.description}</h5>
                                <div>
                                    {proposal.votes.map(({ type, label }) => (
                                        <div key={type} className='flex gap-2 items-center text-lg'>
                                            <input
                                                type="radio"
                                                id={proposal.proposalId + '-' + type}
                                                name={proposal.proposalId}
                                                value={type}
                                                //default the "abstain" vote to checked
                                                defaultChecked={type === 2}
                                            />
                                            <label htmlFor={proposal.proposalId + '-' + type}>
                                                {label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h5 className='font-medium mb-2 text-right'>Proposed By : <span className='text-gray-400'>{shortenAddress(proposal.proposer)}</span></h5>
                                </div>
                            </div>
                        ))}
                        {proposals.length !== 0 && <button className='bg-gray-900 rounded-full border text-purple-200 border-gray-800 py-2.5 px-7 mt-10' disabled={isVoting || hasVoted} type="submit">
                            {isVoting
                                ? 'Voting...'
                                : hasVoted
                                    ? 'You Already Voted'
                                    : 'Submit Votes'}
                        </button>
                        }
                        {proposals.length !== 0 && !hasVoted && (
                            <small className='text-base pt-2 mb-10'>
                                This will trigger multiple transactions that you will need to sign.
                            </small>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Vote