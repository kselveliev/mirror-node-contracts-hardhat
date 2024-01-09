# Sample Hardhat Project

Repo to deploy mirror-node contracts with hardhat

run: **npm install**

then run: **npx hardhat run scripts/deploy.ts --network relay**

the deploy.ts script will deploy a specified contract from deploy.ts script.

you can deploy any contract that is in the contracts folder

It will automatically connect it to you local-node network, 
this config is already defined in the hardhat.config.ts to use local-node properties so 
you don't have to do anything.
