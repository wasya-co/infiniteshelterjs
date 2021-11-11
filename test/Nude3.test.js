
const { expect } = require("chai");

const PUBLIC_KEY = process.env.PUBLIC_KEY

describe("Minting the token and returning it", function () {
  it("should the contract be able to mint a function and return it", async function () {
    const metadata = "https://opensea-creatures-api.herokuapp.com/api/creature/1" //Random metadata url

    const FactoryContract = await ethers.getContractFactory("Nude3NFT"); // Getting the contract

    const factoryContract = await FactoryContract.deploy(); //Deploying the Contract

    const transaction = await factoryContract.awardItem(PUBLIC_KEY, metadata); // Minting the token
    const tx = await transaction.wait() // Waiting for the token to be minted

    console.log(tx, 'tx')

    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber(); // Getting the tokenID

    const tokenURI = await factoryContract.tokenURI(tokenId) // Using the tokenURI from ERC721 to retrieve de metadata

    expect(tokenURI).to.be.equal(metadata); // Comparing and testing

  });
});