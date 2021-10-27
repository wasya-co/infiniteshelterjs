
require("dotenv").config()

const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)


const factoryName = 'Body'
console.log(`Requiring factory: ${factoryName}`)

const contract = require(`../src/artifacts/contracts/${factoryName}.sol/${factoryName}NFT.json`)

// const contractAddress = '0x611c6d3ed3E542f4C556f3d0c959E44f99F2894B'
// const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // localhost, _vp_ 2021-10-26
/*
 * ropsten, _vp_ 2021-10-26
 * which one is this one?
 */
// const contractAddress = '0x6db1a66c0498d293A63a88c0B9dfcAa273c99A30'
const contractAddress = '0x3E1a03a9e1682F4DD95413E0Be69e5b7bcCaf15D'


const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
// console.log('the abi:', JSON.stringify(contract.abi))

async function mintNFT(tokenUri) {
  // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest') + 1;
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
  console.log('nonce:', nonce)

  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 5000000,
    'data': nftContract.methods.awardToken(PUBLIC_KEY, tokenUri).encodeABI()
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise.then((signedTx) => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
      if (!err) {
        console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!")
      } else {
        console.log("Something went wrong when submitting your transaction:", err)
      }
    })
  }).catch((err) => {
    console.log("Promise failed:", err)
  })
}


// the argument is the IPFS json file.
// Nude1NFT, this
mintNFT("https://gateway.pinata.cloud/ipfs/QmUcMJam58RqwH1VtqCvyVCC2gRbX7PLMfTi627qYA68ab").then(() => {
  console.log('echo ok')
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// _vp_ 2021-10-17 0xd7c2b5af50d3ad9cd1700f6d0f9b84498587c923a60a037e7e4776dcde1e78b0
// _vp_ 2021-10-26 0x61aa04453393fcf97ac2d3201853a422d47123addf322150c06bae8712eddba2
// Check Alchemy's Mempool to view the status of your transaction!

/*
 * _vp_ 2021-10-27
 * BodyNFT
 * The hash of your transaction is:  0xca79655edcec7ae34c7f942c81022eeb53ba204d5a64c1178da9eade36a79023
 * The hash of your transaction is:  0xb4067360b1cc16e5d7b4d652b8e3500b994c210f491dc193ec8dac5c102c3a0f
 * The hash of your transaction is:  0xd64607538ab335d584eb221e500749e4fd932f7450480c274c4f82d6fc592c47
 */
