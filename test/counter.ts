import { ethers } from "@nomiclabs/buidler";
import chai from "chai";
import { deployContract, getWallets, solidity } from "ethereum-waffle";

import CounterArtifact from "../build/Counter.json";
import { Counter } from "../typechain/Counter"

chai.use(solidity);
const { expect } = chai;

describe("Counter", () => {
  // 1
  const provider = ethers.provider;

  // 2
  let [wallet] = getWallets(provider);

  // 3
  let counter: Counter;

  beforeEach(async () => {
    counter = await deployContract(wallet, CounterArtifact) as Counter;
    const initialCount = await counter.getCount();

    // 4
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });

  // 5
  it("should count up", async () => {
    await counter.countUp();
    let count = await counter.getCount();
    expect(count).to.eq(1);

    await counter.countUp();
    count = await counter.getCount();
    expect(count).to.eq(2);
  });

  it("should count down", async () => {
    // 6
    await counter.countDown();
    const count = await counter.getCount();
    expect(count).to.eq(0);
  });
});
