const hre = require("hardhat");


async function main() {
    const _baseFee="0.1";
    const GAS_PRICE_LINK="0.000000001";
    
    const _BaseFee = hre.ethers.utils.parseEther(_baseFee)
    const gAS_PRICE_LINK = hre.ethers.utils.parseEther( GAS_PRICE_LINK)

    const VrfCoordinator = await hre.ethers.getContractFactory("VRFCoordinatorV2Mock");
    const vrfCoordinator = await VrfCoordinator.deploy(_BaseFee,gAS_PRICE_LINK);

    await vrfCoordinator.deployed();

    console.log(
        `VRFCoordinatorV2Mock deployed to ${vrfCoordinator.address}`
      );
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


//For Deploying the contract just run the script "vrfDeploy.js" in terminal as below
// npx hardhat run scripts/vrfDeploy.js

//Added constructor down below for deployment checks and constructor's need
 /*  constructor(uint96 _baseFee, uint96 _gasPriceLink) {
    BASE_FEE = _baseFee;
    GAS_PRICE_LINK = _gasPriceLink;
  } */