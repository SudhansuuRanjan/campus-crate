<div align="center">
    <img src="./CampusCrate.png">
</div>
<p align='center'>A <strong>Decentralised</strong> solution for college projects to get grants from Ecosystem.</p>
<h1><a href="https://campus-crate.vercel.app/"> CampusCrate </a> ⛓</h1>

![website](https://user-images.githubusercontent.com/90385824/232301876-bb6633df-41e3-4a18-ac69-82307c20268c.png)
<p align='center' font-size='5px' ><font size='1px'>Home Page</font></p>

![votin page](https://user-images.githubusercontent.com/90385824/232307287-3f542854-3bfb-42a0-9c2b-e02922e9cda8.png)
<p align='center' font-size='5px' ><font size='1px'>Voting Page</font></p>

DAO functionalities:

* A two-tier DAO for incubating and accelerating ecosystem projects.
* Top tier consists of CampusCrate DAO that is accessible for ecosystem verifiers and club leaders.
* Bottom level DAO for college/university clubs to develop projects(personalized for every university with limited functionality).
* NFTs for members and leaders with DAO tokens for voting proposals.
* Club leader can propose new proposals and vote on proposals, as well as secure funding for their respective Blockchain club

<br>
<h2 align='center'> This is project is using <em><strong>Filecoin / IPFS</strong></em> for NFT storage </h2>
<div align='center'>

![download](https://user-images.githubusercontent.com/90385824/232304334-6a261296-d342-439f-8455-cb5ea2a8b17d.png)
</div>
We have used Filecoin for storing our CampusCrate membership NFTs.
<br>
<br>

# Problem we trying to Solve 🤔

* Student entrepreneurship in the web3 space faces significant challenges.
* Many students abandon their web3 projects after hackathons due to a lack of guidance, vision, and funding.
* The lack of proper web3 student infrastructure is a key factor in preventing projects from gaining traction and recognition.

<br>

# Solution we Gave 😎

1. Introducing an innovative solution to expedite student projects :-      
    A Decentralized Autonomous Organisation (DAO) specifically designed for university Blockchain clubs. Our approach comprises a two-tier structure of DAOs, starting with individual University Blockchain clubs that discover and nominate promising projects on campus, with voting conducted by club members

2. The second tier involves the collaboration of these university DAOs, where each Club Leader can propose guidance and funding for projects. Every club leader has the power to cast their vote on proposals, making this a truly democratic and inclusive platform.

<br>

# Our Platform

![website](https://user-images.githubusercontent.com/90385824/232301876-bb6633df-41e3-4a18-ac69-82307c20268c.png)

<br>

# Implementation

## ERC1155 Contract for membership NFTs
We have used ERC1155 contract to deploy NFTs of <em> CampusCrate DAO </em> membership.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0x12C381A9b06EDeB5a03Be718bbBCF6a1dB306f8a
```

## ERC20 contract
We have deployed <em> CampusCrate Goveranance Token</em> which is a ERC20 token.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0xbf9a9f4ff3da3ea6b17c59b04332edd89b072c0c
```
## Voting contract
A voting cortract has been deployed on Polygon to give votting access to CampusCrate DAO members.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0xc8A95Bc1dF176777F52C1F0cD3d7dd93206CEed8
```

## DAO Treasury
We have a DAO treasury account which holds over 90% of CampusCrate tokens, with no single entity claiming ownership or control of account.

<br>

# How it works👷‍♂️
It divided in two part:<strong> Server and client </strong>  
## Server
It consists of following scripts:<br>
1. <strong>Initialize-sdk.js</strong> : It initialize the thirdWeb SDks which we can use to call transactions in other scripts.
2. <strong>deploy-drop.js</strong> : This scripts is used for metadata creation of CampusCrate membership NFTs. 
3. <strong>config-nft.js</strong> : Used for deployment of NFTs to the <em>Mumbai Testnet</em>
4. <strong>set-claim-condition.js</strong> : This script is used for claiming the NFT for membership of DAO. 
5. <strong>deploy-token.js</strong> : This script is used for deployment of <em>CampusCrate Governance token</em> {CCT} to <strong> AddressZero</strong>
6. <strong>print-money.js</strong> : Used for amoumt to token to be minted for the DAO. For now we have minted <u>1,000,000</u> CCT tokens.
7. <strong>airdrop.js</strong> : With the help of this script, we transfer tokens to new joined members for voting to thier accounts.
8. <strong>setup-vote.js</strong> : This script is used for giving voting access to DAO members only. 
9. <strong>create-vote-proposal.js</strong> : With the help of this file, members are given access to create proposals.

<br>

# Tech Stack Used👨‍💻

### ThirdWeb SDK
Visit https://thirdweb.com to know more.

### Reactjs
Refer to https://react.dev/ install React

### TailwindCSS
Refer to TailwindCSS [docs](https://tailwindcss.com/)

### NodeJS
A Javascript runtime environment that executes Javascript code outside a web browser.

### Polygon
Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It is a scaling solution for Ethereum that allows developers to quickly and easily build and deploy Ethereum-compatible blockchain networks tailored to the needs of their decentralized applications (dApps) and users.

### ExpressJs
Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

### Metamask
Metamask is a browser extension that allows users to interact with the Ethereum blockchain. It allows users to connect to the Ethereum network and interact with smart contracts.

### IPFS
IPFS is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open. It is a distributed file system that seeks to connect all computing devices with the same system of files. In some ways, this is similar to the original aims of the Web, but IPFS is actually more similar to a single bittorrent swarm exchanging git objects.
<br> 

# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install Create-React-App
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app globally.

```bash
npm install -g create-react-app
```

### Learn Tailwind CSS
This project uses `Tailwind CSS` for styling. Refer to https://tailwindcss.com/ to learn more about Tailwind CSS.


## Live WebSite URL

The WebSite is deployed in https://campus-crate.vercel.app/

Click on the link to see the website.

## Cloning and Running the Application in local

Clone the project into local.

Install all the npm packages. Go into the root folder in each folder client and server and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command in the `client` folder of the project

```bash
npm run start
```

And Type the following command in the `server` folder of the project

```bash
npm run dev
```

Also you need to add .env file in `server` folder:

Its format looks like:

```
PRIVATE_KEY=<YOUR WALLET PRIVATE KEY>
WALLET_ADDRESS=<YOUR WALLET ADDRESS>
QUICKNODE_API_URL=<YOUR RPC URL>
```

The Client Runs on [http://localhost:3000/](http://localhost:3000/)<br>
The Server Runs on [http://localhost:4000/](http://localhost:4000/)
<br> 
<br>

## Contributors ✨

Team of <em> CampusCrate </em> 💕:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align='center'>
<a href = "https://github.com/SudhansuuRanjan/campus-crate/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=SudhansuuRanjan/campus-crate"/>
</a>
</div>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

