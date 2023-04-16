import { FaEthereum } from "react-icons/fa";
import { ConnectWallet, Web3Button, useAddress, useContract, useNFTBalance } from "@thirdweb-dev/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const editionDropAddress = "0xEd86a7F9F1F06b597849E9e2807F588bccCd75eB";
  const { contract: editionDrop } = useContract(
    editionDropAddress,
    "edition-drop"
  );
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0");

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0);
  }, [nftBalance]);

  if (hasClaimedNFT) {
    navigate("/dashboard");
  }

  const airdrop = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/airdrop");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-16">
      <h1 className="font-bold lg:text-7xl md:text-6xl text-5xl text-center lg:my-20 md:my-16 my-16 mb-4 flex items-center justify-center flex-wrap gap-5 m-auto  max-w-[88%]">
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600  to-pink-600  flex">
          Accelerate your{" "}
        </div>
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-purple-700   flex">
          Blockchain Club{" "}
        </div>
        <div className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 to-red-600 lg:text-7xl md:text-6xl text-5xl flex">
          with CampusCrate
        </div>
      </h1>

      <p className="text-center font-light lg:text-2xl md:text-2xl text-xl  max-w-[80%] m-auto mt-[-3rem]">
        Easy, one tap access to{" "}
        <span className="font-bold text-2xl md:text-3xl lg:text-3xl">DAO</span>{" "}
        Blockchain.
      </p>

      <div className="flex">
        <p className="text-center font-light text-xl py-8 pb-5 flex items-center m-auto">
          <span>Built on </span>
          <FaEthereum className="dark:text-gray-400 text-gray-600 text-2xl" />
          <span className="dark:text-gray-400 text-gray-600 font-semibold">
            Filecoin
          </span>
        </p>
      </div>

      <div className="m-auto flex mt-3 flex-col items-center justify-center">
        {!address ? (
          <ConnectWallet />
        ) : (
          <div className="flex flex-col gap-5 items-center justify-center m-auto">
            <h1>Mint your free 🍪DAO Membership NFT</h1>
            <div className="">
              <Web3Button
                contractAddress={editionDropAddress}
                action={(contract) => {
                  contract.erc1155.claim(0, 1);
                }}
                onSuccess={async () => {
                  await airdrop();
                  console.log(
                    `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`
                  );
                }}
                onError={(error) => {
                  console.error("Failed to mint NFT", error);
                }}
              >
                Mint NFT
              </Web3Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
