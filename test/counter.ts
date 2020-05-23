import { ethers } from "@nomiclabs/buidler";
import { Signer, Wallet } from "ethers";
import chai from "chai";
import { deployContract, solidity } from "ethereum-waffle";
import CounterArtifact from "../artifacts/Counter.json";
import { Counter } from "../typechain/Counter";

chai.use(solidity);
const { expect } = chai;

describe("Counter", () => {
  // // 1
  // const provider = waffle.provider;

  // 2
  let signers: Signer[];

  // 3
  let counter: Counter;

  beforeEach(async () => {
    signers = await ethers.signers();
    counter = await deployContract(<Wallet>signers[0], CounterArtifact) as Counter;
    const initialCount = await counter.getCount();

    // 4
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });

  // 5
  describe("count up", async () => {
    it("should count up", async () => {
      await counter.countUp();
      let count = await counter.getCount();
      expect(count).to.eq(1);
    });
  });

  describe("count down", async () => {
    // 6
    it("should fail", async () => {
      await expect(counter.countDown())
        .to.be.reverted;
    });

    it("should count down", async () => {
      await counter.countUp();

      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(0);
    });
  });
});
