const main= async()=>{
    try{
        
      const update_interval="300"
      
      const priceFeedContract = "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
      
      const vrfCoordinator="0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d"
     
      
      const BullBear=await hre.ethers.getContractFactory("BullBear");
      const bullBear=await BullBear.
      deploy(update_interval,priceFeedContract,vrfCoordinator);
      await bullBear.deployed();
  
      console.log("Contract has been deployed to address: ",bullBear.address)
      process.exit(0);
  
    }catch(error){
      console.log(error);
      process.exit(1);
    }
  }
  
  main();
  //Bullbear constructor for deploy;
  //constructor(uint updateInterval, address _pricefeed, address _vrfCoordinator)
  //update interval=300 
  //pricefeed="0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e" ETH/USD for goerli
  //vrfCoordinator="0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d" coordinator for goerli 

//for deploy;
//npx hardhat run scripts/BullBearDeploy.js --network goerli
//for verify;
//npx hardhat verify --network goerli  0x76840719d0383c3A7e4C569326006D64cB4bAE16 300 
//0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
// 