// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  //First Contract
  const Tweets = await hre.ethers.getContractFactory("Tweets");
  const twitter = await Tweets.deploy("Hello, Hardhat!");

  //Second Contract
  const ProfileImage = await hre.ethers.getContractFactory("ProfileImage");
  const profilePic = await ProfileImage.deploy();

  await twitter.deployed();
  await profilePic.deployed();

  console.log("Twitter deployed to:", twitter.address);
  console.log("Profile Pic deployed to:", profilePic.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//   Account #17: 0xbda5747bfd65f08deb54cb465eb87d40e51b197e (10000 ETH)
// Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd


// Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

//   Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
//   Transaction:         0x391ab346b25c56600f7eff67337b6c164e8ee27c67bf42402494506ec4e84d07
//   From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
//   Value:               0 ETH
//   Gas used:            600276 of 600276
//   Block #1:            0x5a39c0af92ccaf2c8cdba65862ab40c495343820d4545d758cecd2db29fa7eb1
