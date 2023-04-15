// 3 - config-nft.js
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


const deployNFT = async (address) => {
    try {
        const editionDrop = await sdk.getContract(address, "edition-drop");
        await editionDrop.createBatch([
            {
                name: "Campus Crate Membership",
                description: "This NFT will give you access to the Campus Crate DAO.",
                image: readFileSync("scripts/assets/campus.jpg"),
            },
        ]);
        return ("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        return ("failed to create the new NFT!");
    }
};

export default deployNFT;
