const sdk =  require("./1-initialize-sdk.js");
const {AddressZero} = require("@ethersproject/constants");


const deployToken =  async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenAddress = await sdk.deployer.deployToken({
            // What's your token's name? Ex. "Ethereum"
            name: "CampusCrate Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "CCT",
            // This will be in case we want to sell our token,
            // because we don't, we set it to AddressZero again.
            primary_sale_recipient: AddressZero,
        });
        return ({
            message: "✅ Successfully deployed token contract",
            status: "SUCCESS",
            tokenAddress
        });
    } catch (error) {
        return ({
            message: "❌ Failed to deploy token contract",
            status: "FAILED",
            error
        });
    }
};

module.exports = deployToken;