const hre = require("hardhat");
const ethers = hre.ethers;

const { constants } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

const { skipDeploymentIfAlreadyDeployed } = require('./helpers.js');

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
    network
  }) => {

  const { deploy, save } = deployments;
  const { deployer, alice, bob } = await getNamedAccounts();

  const second = await deploy("Second", {
      from: deployer,
      skipIfAlreadyDeployed: skipDeploymentIfAlreadyDeployed,
      log: true
    }
  );
}
module.exports.tags = ["second_main"]
module.exports.runAtTheEnd = true;
