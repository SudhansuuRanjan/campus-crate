const sdk = require("./1-initialize-sdk.js");

const setUpVote = async (address) => {
  try {
    // This is our governance contract.
    const vote = await sdk.getContract(address, "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xBF9a9f4fF3dA3EA6b17C59b04332eDd89b072C0C", "token");
    // Give our treasury the power to mint additional token if needed.
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    // This is our governance contract.
    const vote = await sdk.getContract(address, "vote");
    // This is our ERC-20 contract.
    const token = await sdk.getContract("0xBF9a9f4fF3dA3EA6b17C59b04332eDd89b072C0C", "token");
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number(ownedAmount) / 100 * 90;

    // Transfer 90% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      percent90
    ); 

    return("✅ Successfully transferred " + percent90 + " tokens to vote contract");
  } catch (err) {
    return("failed to transfer tokens to vote contract", err);
  }
};

module.exports = setUpVote;