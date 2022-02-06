const { BigNumber } = require('ethers');
const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-bignumber')());
const { ethers } = require('hardhat');

describe('third', () => {
  it('measuring gas spending', async () => {
    await deployments.fixture(['third_main']);
    const [ deployer ] = await hre.ethers.getSigners();
    const personHolderDeployment = await deployments.get('PersonHolder');
    personHolder = await hre.ethers.getContractAt("PersonHolder", personHolderDeployment.address);
    const gasAmount1 = await personHolder.estimateGas.getPerson1(0);
    const gasAmount2 = await personHolder.estimateGas.getPerson2(0);
    console.log(`Gas amount of first approach: ${gasAmount1}`);
    console.log(`Gas amount of second approach: ${gasAmount2}`);
    expect(gasAmount1).to.be.above(gasAmount2);

    // const receipt1 = await personHolder.connect(deployer).getPerson1(0);
    // const receipt2 = await personHolder.connect(deployer).getPerson2(0);
    // console.log(receipt1);
    // console.log(receipt2);
  });
});
