const { BigNumber } = require('ethers');
const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-bignumber')());
const {ethers, getNamedAccounts} = require('hardhat');

const { withImpersonatedSigner, consensysProxyFuseAddress } = require("./helpers.js");

describe('first', () => {

  let first;
  let consensus;

  it('testing only validator', async () => {
    await deployments.fixture(['first_main']);
    const { deployer } = await getNamedAccounts();
    const firstDeployment = await deployments.get('First');
    first = await hre.ethers.getContractAt("First", firstDeployment.address);
    consensus = await hre.ethers.getContractAt("ICoreConsensus", consensysProxyFuseAddress);

    const someValidator = await consensus.currentValidatorsAtPosition(0);

    expect(first.connect(deployer).testModifier()).to.be.revertedWith("onlyFuseValidator");

    await withImpersonatedSigner(someValidator, async (validator) => {
        expect((await first.connect(validator).testModifier()).toString()).to.be.equal("0");
    });

  });
});
