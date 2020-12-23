
const bip39=require('bip39')
const HDWallet=require('ethereum-hdwallet')
const mnemonic = bip39.generateMnemonic()


async function getAddress(mnemonic){
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const hdwallet= HDWallet.fromSeed(seed);
    const key=hdwallet.derive("m/44'/60'/0'/0/0")
    console.log(key.getPrivateKey().toString('hex'))
    console.log(key.getPublicKey().toString('hex'))
    console.log(key.getAddress().toString('hex'))
}


getAddress(mnemonic)