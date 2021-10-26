
require("dotenv").config()

const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)


const contract = require("../src/artifacts/contracts/Nude3.sol/Nude3NFT.json")
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // localhost, _vp_ 2021-10-26
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function cancel() {
  // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest') + 1; // get latest nonce
  // const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
  const nonce = 16

  // the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 8000000,
    'data': nftContract.methods.awardItem(PUBLIC_KEY, "https://blah-blah.com").encodeABI()
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  return await signPromise.then((signedTx) => {
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



cancel().then(() => {
  console.log('echo ok')
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

