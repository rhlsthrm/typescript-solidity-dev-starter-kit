import { ethers } from "@nomiclabs/buidler";

import CounterArtifact from "../build/Counter.json";
import { Wallet, ContractFactory } from "ethers";

async function main() {
  const factory = await ethers.getContract("Counter")
  // Notice we pass in "Hello World" as the parameter to the constructor
  let contract = await factory.deploy();

  // The address the Contract WILL have once mined
  console.log(contract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log(contract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });