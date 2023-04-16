import { useState, useEffect, useMemo } from 'react';
import { useAddress, useContract, useNFTBalance } from '@thirdweb-dev/react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const address = useAddress();
  const navigate = useNavigate();
  // console.log("👋 Address:", address);


  const editionDropAddress = "0xEd86a7F9F1F06b597849E9e2807F588bccCd75eB"
  const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
  // Hook to check if the user has our NFT
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0")
  // Initialize our token contract
  const { contract: token } = useContract('0xBF9a9f4fF3dA3EA6b17C59b04332eDd89b072C0C', 'token');

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0)
  }, [nftBalance])

  // Holds the amount of token each member has in state.
  const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);
  // The array holding all of our members addresses.
  const [memberAddresses, setMemberAddresses] = useState([]);

  // A fancy function to shorten someones wallet address, no need to show the whole thing.
  const shortenAddress = (str) => {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4);
  };

  if (!hasClaimedNFT) {
    navigate("/");
  }


  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }
    // Just like we did in the 7-airdrop-token.js file! Grab the users who hold our NFT
    // with tokenId 0.
    const getAllAddresses = async () => {
      try {
        const memberAddresses = await editionDrop?.history.getAllClaimerAddresses(
          0,
        );
        setMemberAddresses(memberAddresses);
        // console.log('🚀 Members addresses', memberAddresses);
      } catch (error) {
        console.error('failed to get member list', error);
      }
    };
    getAllAddresses();
  }, [hasClaimedNFT, editionDrop?.history]);


  useEffect(() => {
    if (!hasClaimedNFT) {
      return;
    }

    const getAllBalances = async () => {
      try {
        const amounts = await token?.history.getAllHolderBalances();
        setMemberTokenAmounts(amounts);
        // console.log('👜 Amounts', amounts);
      } catch (error) {
        console.error('failed to get member balances', error);
      }
    };
    getAllBalances();
  }, [hasClaimedNFT, token?.history]);

  const memberList = useMemo(() => {
    return memberAddresses.map((address) => {
      const member = memberTokenAmounts?.find(({ holder }) => holder === address);
      return {
        address,
        tokenAmount: member?.balance.displayValue || '0',
      };
    });
  }, [memberAddresses, memberTokenAmounts]);


  return !hasClaimedNFT ? <div className='m-auto flex flex-col items-center justify-center gap-16 p-5'>
    <p>You don't have access to this page. Claim Membership NFT to become a member.</p>
  </div> : (
    <div className='m-auto flex flex-col items-center justify-center gap-16 p-5'>
      <div className='text-center flex gap-2 flex-col'>
        <h1 className='text-purple-500 font-bold text-6xl'>CampusCrate DAO</h1>
        <p className='text-gray-500 font-light text-2xl'>Welcome to the CampusCrate DAO</p>
        <p className='text-pink-600 text-2xl '>Congratulations on being a member!</p>
      </div>
      <div className='items-center flex justify-center flex-col gap-5'>
        <h1 className='text-purple-500 font-bold text-2xl'>Members List</h1>
        <div className='mt-4 rounded-2xl overflow-hidden border border-gray-500'>
          <table className='table-auto'>
            <thead>
              <tr>
                <th className='px-5 py-3'>Address</th>
                <th className='px-5 py-3'>Token Amount</th>
                <th className='px-5 py-3'>Organization</th>
                <th className='px-5 py-3'>Post</th>
              </tr>
            </thead>
            <tbody>
              {memberList.length === 0 ? <div className='my-16 text-center w-full'>Loading...</div> : memberList.map((member, index) => {
                return (
                  <tr key={index}>
                    <td className='px-5 py-3'>{shortenAddress(member.address)}</td>
                    <td className='px-5 py-3'>{member.tokenAmount} CCT</td>
                    <td className='px-5 py-3'>NIT Patna</td>
                    <td className='px-5 py-3'>(Member)</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard