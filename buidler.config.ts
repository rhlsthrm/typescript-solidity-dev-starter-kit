import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";
import waffleDefaultAccounts from "ethereum-waffle/dist/config/defaultAccounts";

usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-etherscan");

const INFURA_API_KEY = "";
const RINKEBY_PRIVATE_KEY = "";
const ETHERSCAN_API_KEY = "";

const config: BuidlerConfig = {
  solc: {
    version: "0.5.12"
  },
  paths: {
    artifacts: "./build"
  },
  networks: {
    buidlerevm: {
      accounts: waffleDefaultAccounts.map(acc => ({
        balance: acc.balance,
        privateKey: acc.secretKey
      }))
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  },
  etherscan: {
    // The url for the Etherscan API you want to use.
    url: "https://api-rinkeby.etherscan.io/api",
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
