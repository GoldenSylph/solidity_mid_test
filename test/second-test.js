const { BigNumber } = require('ethers');
const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-bignumber')());
const {ethers, getNamedAccounts} = require('hardhat');

describe('second', () => {
  it('testing hash checking', async () => {
    await network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET}`
          },
        },
      ],
    });

    await deployments.fixture(['fourth_main']);
    const [ deployer ] = await ethers.getSigners();
    const secondDeployment = await deployments.get('Second');
    const second = await ethers.getContractAt("Second", secondDeployment.address);

    console.log(await ethers.getBlock());
  });
});
