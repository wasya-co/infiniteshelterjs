
require("dotenv").config()

const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)


const contract = require("../src/artifacts/contracts/Nude3.sol/Nude3NFT.json")
// const contractAddress = '0x611c6d3ed3E542f4C556f3d0c959E44f99F2894B'
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // localhost, _vp_ 2021-10-26

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)
// console.log('the abi:', JSON.stringify(contract.abi))

async function mintNFT(tokenUri) {
  // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest') + 1; // get latest nonce
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
  console.log('nonce:', nonce)

  // the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 5000000,
    'data': nftContract.methods.awardItem(PUBLIC_KEY, tokenUri).encodeABI()
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
