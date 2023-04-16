const sdk = require("./1-initialize-sdk.js");

const generateMoney = async (address) => {
  try {
    // This is the address of our ERC-20 contract printed out in the step before.
    const token = await sdk.getContract(address, "token");
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    return("✅ There now is " + totalSupply.displayValue + " $CCT in circulation");
  } catch (error) {
    return("Failed to print money", error);
  }
};

module.exports = generateMoney;