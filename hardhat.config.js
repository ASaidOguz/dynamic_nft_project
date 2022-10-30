require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.1",
      },
      {
        version: "0.8.1",
        settings: {},
      },
      {
        version:"0.8.4",

      },
      {
        version:"0.6.5"
      }
    ],
  },
  networks:{
    goerli:{
    url:process.env.TESTNET_RPC,
    accounts:[process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:process.env.GOERLI_API_KEY
   }
};
