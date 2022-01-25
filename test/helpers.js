const { ether } = require("@openzeppelin/test-helpers");
const hre = require("hardhat");
const ethers = hre.ethers;

// https://explorer.fuse.io/address/0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79/read-contract
const consensysProxyFuseAddress = "0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79";

const withImpersonatedSigner = async (signerAddress, action) => {
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [signerAddress],
  });

  await hre.network.provider.send("hardhat_setBalance", [
    signerAddress,
    `0x${ether('10000').toString(16)}`,
  ]);

  const impersonatedSigner = await hre.ethers.getSigner(signerAddress);
  await action(impersonatedSigner);

  await hre.network.provider.request({
    method: "hardhat_stopImpersonatingAccount",
    params: [signerAddress],
  });
}

module.exports = {
  withImpersonatedSigner,
  consensysProxyFuseAddress
};
