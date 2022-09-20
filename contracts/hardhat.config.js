require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  abiExporter: {
    path: '../abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
    pretty: true,
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    testEvmos: {
      url: "https://eth.bd.evmos.dev:8545",
      chainId: 9000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    evmos: {
      url: "https://eth.bd.evmos.org:8545",
      chainId: 9001,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    localhost: {
      allowUnlimitedContractSize: true,
    },
  },
};
