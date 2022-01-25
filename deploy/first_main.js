const hre = require("hardhat");
const ethers = hre.ethers;

const { constants } = require('@openzeppelin/test-helpers');
const { ZERO_ADDRESS } = constants;

const { skipDeploymentIfAlreadyDeployed, consensysProxyFuseAddress } = require('./helpers.js');

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
    network
  }) => {

  const { deploy, save } = deployments;
  const { deployer, alice, bob } = await getNamedAccounts();

  const firstConstructorArgs = [
    consensysProxyFuseAddress
  ];
  const first = await deploy("First", {
      from: deployer,
      args: firstConstructorArgs,
      skipIfAlreadyDeployed: skipDeploymentIfAlreadyDeployed,
      log: true
    }
  );

}
module.exports.tags = ["first_main"]
module.exports.runAtTheEnd = true;
