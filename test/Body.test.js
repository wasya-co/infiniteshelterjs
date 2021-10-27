
const { expect } = require("chai")
const web3 = require('web3')

const PUBLIC_KEY = process.env.PUBLIC_KEY

describe("Minting the token", () => {

  it('#totalSupply()', async () => {
    const FactoryContract = await ethers.getContractFactory("BodyNFT")
    const factoryContract = await FactoryContract.deploy()

    const result = await factoryContract.totalSupply()
    expect(result).to.equal(0)
  })

  it("#awardToken(), #totalSupply(), #tokensOfOwner(), #ownerOf() ", async () => {
    const metadata = "https://random-url.com/"

    const FactoryContract = await ethers.getContractFactory("BodyNFT")
    const factoryContract = await FactoryContract.deploy()
    const transaction = await factoryContract.awardToken(PUBLIC_KEY, metadata)
    const tx = await transaction.wait()
    console.log(tx, 'tx')

    const event = tx.events[0]
    const value = event.args[2]
    const tokenId = value.toNumber()
    const tokenURI = await factoryContract.tokenURI(tokenId)
    expect(tokenURI).to.be.equal(metadata)

    const totalSupply = await factoryContract.totalSupply()
    expect(totalSupply).to.be.bignumber.equal(1)

    // tokensOfOwner()
    const ownerTokens = await factoryContract.tokensOfOwner(PUBLIC_KEY)
    expect(ownerTokens).to.equal([tokenId])

    // ownerOf()
    const ownerOf = await factoryContract.ownerOf(tokenId)
    expect(ownerOf).to.equal(PUBLIC_KEY)

  })

})
