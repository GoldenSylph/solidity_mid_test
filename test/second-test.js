const { BigNumber } = require('ethers');
const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-bignumber')());
const {ethers, getNamedAccounts} = require('hardhat');

describe('second', () => {
  it('testing hash checking', async () => {
    await deployments.fixture(['second_main']);

  });
});
