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
}
module.exports.tags = ["second_main"]
module.exports.runAtTheEnd = true;
