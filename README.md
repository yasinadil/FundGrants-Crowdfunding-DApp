# FundGrants-Crowdfunding-DApp /n
Crowdfunding DApp works with Ganache. Created using React, HTML, CSS, and Bootstrap /n
To run this project /n
Firstly delete node modules and package-lock.json and run npm install from root folder of the project.
1) Open Ganache and create a local Ethereum Blockchain
2) cd into the project and run "truffle migrate --reset" to deploy Smart Contract into Ganache.
3) Update smart contract address in Crowdfunding.js
4) cd into dapp using "cd dapp"
5) run "npm run compile"
6) Copy abi from /build/contract into Crowdfunding.js
7) npm start and the DApp should work fine.
