import { ethers } from "@nomiclabs/buidler";
import { Wallet } from "ethers";
import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";
import CounterArtifact from "../artifacts/Counter.json";
import { Counter } from "../typechain/Counter";

chai.use(solidity);
const { expect } = chai;

describe("Counter", () => {
  let counter: Counter;

  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners();

    // 2
    counter = (await deployContract(signers[0], CounterArtifact)) as Counter;
    const initialCount = await counter.getCount();

    // 3
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });

  // 4
  describe("count up", async () => {
    it("should count up", async () => {
      await counter.countUp();
      let count = await counter.getCount();
      expect(count).to.eq(1);
    });
  });

  describe("count down", async () => {
    // 5
    it("should fail", async () => {
      await counter.countDown();
    });

    it("should count down", async () => {
      await counter.countUp();

      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(0);
    });
  });
});
