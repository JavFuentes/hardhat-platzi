/** @type import('hardhat/config').HardhatUserConfig */

const { infuraProjectId, privateKey } = require("./secrets.json");

module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${infuraProjectId}`,
      accounts: [privateKey]
    }
  },  
};
