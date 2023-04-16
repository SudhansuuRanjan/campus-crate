const sdk = require("./1-initialize-sdk.js");

const Airdrop = async () => {
  try {
    // This is the address to our ERC-1155 membership NFT contract.
    const editionDrop = await sdk.getContract("0xEd86a7F9F1F06b597849E9e2807F588bccCd75eB", "edition-drop");
    // This is the address to our ERC-20 token contract.
    const token = await sdk.getContract("0xBF9a9f4fF3dA3EA6b17C59b04332eDd89b072C0C", "token");
    // Grab all the addresses of people who own our membership NFT, which has 
    // a tokenId of 0.
    const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);

    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }

    // Loop through the array of addresses.
    const airdropTargets = walletAddresses.map((address) => {
      // Pick a random # between 1000 and 10000.
      const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      // Set up the target.
      const airdropTarget = {
        toAddress: address,
        amount: randomAmount,
      };

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...");
    await token.transferBatch(airdropTargets);
    return ("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    return ("Failed to airdrop tokens", err);
  }
};

module.exports = Airdrop;