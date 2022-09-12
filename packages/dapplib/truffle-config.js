require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift random noise artwork grace indoor foster gaze'; 
let testAccounts = [
"0x7bec50d7ed3a031ef86172fd3b13791862c8f912ac55e30b16333704755c54ce",
"0xb0f2bd57a2bf80a06e3d9830801cdf82b13aa5a1a488f03d9bbbd7d0b993167a",
"0x734f7c65046deb2f619e51479ea5cd52b8364f756e68a38ef380c4d89f070ef0",
"0xf6100af9a19e9293f2d266bdd4970a45e5c7ffde5383583ac8e5c858cf4bc0d3",
"0xa9856606b37fb5d813a3b8d46dac0f20739f12f142f91e1673f86a48706046e0",
"0x22f8dae1b54de4810c8ac7c9d7ccce96243e8c6f0fe007d5ba50775283355634",
"0x96dfff9d41d96c8fb224a0c7f935f7043623001eeb241692cbc7bb05d2a300c0",
"0x0fc722b867b23a5cb678d08db4a6233bebe6a11fb9f227dd7752264a113aaa8a",
"0xe30cb3d02705c9f877edb51ed9869315c3d4446ab0bc911b270217525d2c6eed",
"0xe928ad028443d038cf7233bffdfc7d3ff59c662aa1600db28274b433270b28cc"
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

