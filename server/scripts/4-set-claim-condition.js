// File name -  4-set-claim-condition.js
const sdk = require("./1-initialize-sdk.js");
const { MaxUint256 } = require("@ethersproject/constants");

const claimConditions = async (address) => {
    try {
        const editionDrop = await sdk.getContract(address, "edition-drop");
        // We define our claim conditions, this is an array of objects because
        // we can have multiple phases starting at different times if we want to
        const claimConditions = [{
            // When people are gonna be able to start claiming the NFTs (now)
            startTime: new Date(),
            // The maximum number of NFTs that can be claimed.
            maxClaimable: 50_000,
            // The price of our NFT (free)
            price: 0,
            // The amount of NFTs people can claim in one transaction.
            maxClaimablePerWallet: 1,
            // We set the wait between transactions to unlimited, which means
            // people are only allowed to claim once.
            waitInSeconds: MaxUint256,
        }]

        await editionDrop.claimConditions.set("0", claimConditions);
        return ("✅ Sucessfully set claim condition!");
    } catch (error) {
        return ("Failed to set claim condition!");
    }
}

module.exports = claimConditions;