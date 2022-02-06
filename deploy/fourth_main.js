const hre = require("hardhat");
const ethers = hre.ethers;

const { skipDeploymentIfAlreadyDeployed } = require('./helpers.js');

module.exports = async ({
    getNamedAccounts,
    deployments
  }) => {

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const swapper = await deploy("Swapper", {
      from: deployer,
      skipIfAlreadyDeployed: skipDeploymentIfAlreadyDeployed,
      log: true
    }
  );

}
module.exports.tags = ["fourth_main"]
module.exports.runAtTheEnd = true;
