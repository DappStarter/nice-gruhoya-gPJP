require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food jaguar deny payment upset gentle light army giant'; 
let testAccounts = [
"0x9929008e813c904bbbdf118f3e955e8f0d10f3a3b080a0bf1efb49d92f8bfb6b",
"0x959026e9dc8f1825fe665074a919ac07c7b926eb2c82746f07544a0737eb3d7a",
"0x5dbe20f0879e55eb81268958ff406fbbdbbdd35ce6b54379ec5aa0517f9bd707",
"0x216f1714eb4f4e30df6ebfa99b00ac5abc312e0fd674bcf09f4f2deb15bb7e1b",
"0x19b80a8eb52f028eb996b7793ed69fb74f9d7d3a22c572720dbb4b5c922bda9b",
"0x93b450c529d3abe9d657a48774749bc24e361e5ac0dedd49296e50c0b4ea3049",
"0xbb55e58272da96d82097a8c6c7eb4df64a074d97f684da7093030d060449f6c9",
"0x9b66bd5749aeca842b999fbbc235bc42ffc6c6f7da37123f00245327ab5620b2",
"0x2ab6c7d717c96a38d58a6176fd9fef72a979559f5bf8710002e8ffd552787a56",
"0xc6dd6a9f04def72273f4b1c011edee2c13d29c96abadf3a3440bda9e3d7378a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

