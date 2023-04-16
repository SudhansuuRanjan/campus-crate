require("dotenv").config();
var port = process.env.PORT || 4000;
var express = require('express');
var cors = require('cors');
var deployNFTMetadata = require('./scripts/2-deploy-drop.js');
var deployNFT = require('./scripts/3-config-nft.js');
var claimConditions = require('./scripts/4-set-claim-condition.js');
var deployToken = require('./scripts/5-deploy-token.js');
var generateMoney = require('./scripts/6-print-money.js');
var Airdrop = require('./scripts/7-airdrop-token.js');
var deployVote = require('./scripts/8-deploy-vote.js');
var setUpVote = require('./scripts/9-setup-vote.js');
var createVoteProposal = require('./scripts/10-create-vote-proposals.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/api/deployNFT', async (req, res) => {
    try {
        const data = await deployNFTMetadata();
        const response = await deployNFT(data.editionDropAddress);
        const claimResponse = await claimConditions(data.editionDropAddress);
        res.send({
            data,
            response,
            claimResponse
        });
    } catch (error) {
        res.send("failed to deploy NFT!");
    }
});


app.post('/api/deployToken', async (req, res) => {
    try {
        const data = await deployToken();
        const response = await generateMoney(data.tokenAddress);
        res.send({
            data,
            response
        });
    } catch (error) {
        res.send("failed to deploy token!");
    }
});

app.post('/api/airdrop', async (req, res) => {
    try {
        const data = await Airdrop();
        res.send(data);
    } catch (error) {
        res.send("failed to airdrop token!");
    }
});

app.post('/api/deployVoteToken', async (req, res) => {
    try {
        const data = await deployVote();
        const response = await setUpVote(data.voteContractAddress);
        res.send({
            data,
            response
        });
    } catch (error) {
        res.send("failed to deploy vote!");
    }
});

app.post('/api/create-proposal', async (req, res) => {
    try {
        const data = await createVoteProposal(req.body.description);
        res.send(data);
    } catch (error) {
        res.send("failed to create proposal!");
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀 : http://localhost:${port}`);
});
