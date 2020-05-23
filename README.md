# Typescript Solidity Dev Starter Kit

This is a starter kit for developing, testing, and deploying smart contracts with a full Typescript environment. This stack uses [Buidler](https://buidler.dev) as the platform layer to orchestrate all the tasks. [Ethers](https://docs.ethers.io/ethers.js/html/index.html) is used for all Ethereum interactions and testing.

## Using this Project

Clone this repository, then install the dependencies with `npm install`. Build everything with `npm run build`. https://buidler.dev has excellent docs, and can be used as reference for extending this project.

## Available Functionality

### Build Contracts

`npm run compile`

### Generate TypeChain Typings

`npm run build`

### Run Contract Tests

`npm run test`

Note: As is, the tests fail on purpose. This is to show the Solidity stack traces that Buidler enables!

### Run Coverage Report for Tests

`npm run coverage`

Note: The branch coverage is 75 %.

### Deploy to Ethereum

Create/modify network config in `buidler.config.ts` and add API key and private key, then run:

`npx buidler run --network rinkeby scripts/deploy.ts`

### Verify on Etherscan

Add Etherscan API key to `buidler.config.ts`, then run:

`npx buidler verify-contract --contract-name Counter --address <DEPLOYED ADDRESS>`

## Enhancement Wish List

* Better migrations strategy (Buidler working on this)

PRs and feedback welcome!
