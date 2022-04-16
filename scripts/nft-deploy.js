
const hre = require("hardhat");

async function main() {

  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const factoryName = 'Avatar'

  const Nft = await hre.ethers.getContractFactory(factoryName);
  const nft = await Nft.deploy();
  await nft.deployed();
  console.log(`${factoryName} deployed to:`, nft.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
