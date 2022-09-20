const fs = require('fs');
const path = require('path');
const hre = require("hardhat");

async function main() {
  const EvmosPunksBadge = await hre.ethers.getContractFactory("EvmosPunksBadge");
  const evmosPunksBadgeContract = await EvmosPunksBadge.deploy();

  await evmosPunksBadgeContract.deployed();

  console.log("evmosPunksBadgeContract deployed to:", evmosPunksBadgeContract.address);

  const content = {
    'evmosPunksBadgeContract' : evmosPunksBadgeContract.address
  }
  createAddressJson(path.join(__dirname, '../address.json'),JSON.stringify(content))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function createAddressJson(path,content){
  try{
    fs.writeFileSync(path,content)
    console.log("Created Contract Address JSON")
  } catch (err) {
    console.error(err)
    return
  }
}
