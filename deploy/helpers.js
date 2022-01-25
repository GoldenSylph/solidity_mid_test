const { ether } = require("@openzeppelin/test-helpers");
const hre = require("hardhat");
const ethers = hre.ethers;

const skipDeploymentIfAlreadyDeployed = false;

// https://explorer.fuse.io/address/0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79/read-contract
const consensysProxyFuseAddress = "0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79";

module.exports = {
  skipDeploymentIfAlreadyDeployed,
  consensysProxyFuseAddress
};
