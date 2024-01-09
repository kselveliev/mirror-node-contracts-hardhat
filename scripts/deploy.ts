import { ethers } from "hardhat";

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const Contract = await ethers.getContractFactory("EstimateGasContract");
  const contract = await Contract.deploy({gasLimit: 1_000000});
   // Add constructor arguments if any

   console.log(await contract.waitForDeployment());

  //await contract.waitForDeployment();

  console.log("Contract deployed to:", contract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

