const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env.ROPSTEN_MNEMONIC;
const accessToken = process.env.INFURA_ACCESS_TOKEN;

// when you develop, use "truffle develp" in command line (This does not mean you use development network below)
// when you use testnet below, use "truffle migrate --network ropsten" in command
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: 3,
      gas: 3000000
    }
  }
}