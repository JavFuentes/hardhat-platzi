/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { infuraProjectId, privateKey } = require("./secrets.json");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"  // Si tienes una API Key de Etherscan, agrégala aquí
  }
};
