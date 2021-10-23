
require("dotenv").config()

const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../src/artifacts/contracts/Nude1.sol/Nude1NFT.json")
// console.log('the abi:', JSON.stringify(contract.abi))

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // That's where NFT was minted to. _vp_ 2021-10-23
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenUri) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest') + 1; // get latest nonce
  console.log('nonce:', nonce)

  // the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenUri).encodeABI()
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

// @TODO: does this work? this is async main
const main = async () => {
  // the argument is the IPFS json file.
  // Nude1NFT, this
  await mintNFT("https://gateway.pinata.cloud/ipfs/QmUcMJam58RqwH1VtqCvyVCC2gRbX7PLMfTi627qYA68ab")

  console.log('echo ok')

  // 2021-10-17 _vp_
  // The hash of your transaction is:  0xd7c2b5af50d3ad9cd1700f6d0f9b84498587c923a60a037e7e4776dcde1e78b0
  // Check Alchemy's Mempool to view the status of your transaction!
}()