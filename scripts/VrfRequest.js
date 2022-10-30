
async function main() {
    const _keyHash="0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc";
    const _subId="1";
    const _minimumRequestConfirmations="3";
    const _callbackGasLimit="500000";
    const _numWords="3";
//Get example accounts
const[owner,consumer1]=await hre.ethers.getSigners();
 //Get the contract deployed & deploy
 console.log("==========DEPLOYMENT PHASE==========")   
 const _baseFee="0.1";
    const GAS_PRICE_LINK="0.000000001";
    const _BaseFee = hre.ethers.utils.parseEther(_baseFee)
    const gAS_PRICE_LINK = hre.ethers.utils.parseEther( GAS_PRICE_LINK)
    const VrfCoordinator = await hre.ethers.getContractFactory("VRFCoordinatorV2Mock");
    const vrfCoordinator = await VrfCoordinator.deploy(_BaseFee,  gAS_PRICE_LINK );
    await vrfCoordinator.deployed();
    console.log(
        `VRFCoordinatorV2Mock deployed to ${vrfCoordinator.address}`
      );
//Get subscription;
console.log("==========GET SUBSCRIPTION PHASE==========")
await vrfCoordinator.connect(owner).createSubscription();
const subStats=await vrfCoordinator.connect(owner).getSubscription("1")
console.log("Owner address: ",owner.address)
console.log("Check The address below for owner address===")
console.log("Your vrf subscription stats:", subStats)
console.log("==========FUNDING PHASE==========")
//Fund your subscription
const _fundFee="0.1"
const _FundFee = hre.ethers.utils.parseEther(_fundFee)
await vrfCoordinator.connect(owner).fundSubscription("1",_FundFee);
const FundedsubStats=await vrfCoordinator.connect(owner).getSubscription("1")
console.log("Owner address: ",owner.address)
console.log("Check The address below for owner address===")
console.log("Your vrf subscription stats after funding :", FundedsubStats)
//Adding consumer
console.log("==========ADD CONSUMER PHASE==========")
await vrfCoordinator.connect(owner).addConsumer("1",consumer1.address);
const ConsumersubStats=await vrfCoordinator.connect(owner).getSubscription("1")
console.log("Consumer1 address: ",consumer1.address)
console.log("Check The address below for consumer1 address===")
console.log("Your vrf subscription stats after funding :", ConsumersubStats)
//Requesting random number 
console.log("==========REQ. RANDOM NUMBER PHASE==========")
const RandomNumber1=await vrfCoordinator.connect(consumer1).requestRandomWords(_keyHash,_subId,_minimumRequestConfirmations,
_callbackGasLimit,_numWords);
console.log("Your requested random number(word) id: ",RandomNumber1)

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });