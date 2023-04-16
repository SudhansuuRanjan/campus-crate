import { useState, useEffect, useMemo } from 'react';
import { useAddress, ConnectWallet, useNetwork, useDisconnect, useContract, useNFTBalance, Web3Button } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';


const Dashboard = () => {
  const address = useAddress();
  const network = useNetwork();
  console.log("👋 Address:", address);
  const disconnect = useDisconnect();

  const editionDropAddress = "0xEd86a7F9F1F06b597849E9e2807F588bccCd75eB"
  const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
  // Hook to check if the user has our NFT
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0")
  // Initialize our token contract
  const { contract: token } = useContract('0x6AD3719D3bdAe3a7113d081574dbdb1efD2D75e0', 'token');
  const { contract: vote } = useContract("0xcBE37215864c8c691866D9F2A848AEdEF525bC10", "vote");

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


  return (
    <div>
      
    </div>
  )
}

export default Dashboard