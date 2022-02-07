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

    await deployments.fixture(['second_main']);
    const [ deployer ] = await ethers.getSigners();
    const secondDeployment = await deployments.get('Second');
    const second = await ethers.getContractAt("Second", secondDeployment.address);


    const web3BlockInfo = await web3.eth.getBlock("latest");
    const blockNumber = web3BlockInfo.number;
    const ethersBlockInfo = await ethers.provider.getBlock(blockNumber);

    console.log(web3BlockInfo);
    // console.log(ethersBlockInfo);

    const blockHeaderExpectedPayload = [
      web3BlockInfo.parentHash,
      web3BlockInfo.sha3Uncles,
      web3BlockInfo.miner,
      web3BlockInfo.stateRoot,
      web3BlockInfo.transactionsRoot,
      web3BlockInfo.receiptsRoot,
      web3BlockInfo.logsBloom,
      ethersBlockInfo._difficulty.toHexString(),
      ethers.BigNumber.from(blockNumber).toHexString(),
      ethers.BigNumber.from(web3BlockInfo.gasLimit.toString()).toHexString(),
      ethers.BigNumber.from(web3BlockInfo.gasUsed.toString()).toHexString(),
      ethers.BigNumber.from(web3BlockInfo.timestamp.toString()).toHexString(),
      ethersBlockInfo.extraData,
      web3BlockInfo.mixHash,
      ethers.BigNumber.from(web3BlockInfo.nonce).toHexString(),
      ethersBlockInfo.baseFeePerGas.toHexString()
    ];

    const rlpExpected = ethers.utils.RLP.encode(blockHeaderExpectedPayload);
    console.log(blockHeaderExpectedPayload);
    // console.log(rlpExpected);
    console.log(ethers.utils.keccak256(rlpExpected));

    const blockHeaderPayload = [
        [
          web3BlockInfo.parentHash,
          web3BlockInfo.sha3Uncles
        ],
        web3BlockInfo.miner,
        [
          web3BlockInfo.stateRoot,
          web3BlockInfo.receiptsRoot,
        ],
        web3BlockInfo.logsBloom,
        [
          ethersBlockInfo._difficulty,
          ethers.BigNumber.from(blockNumber),
          ethers.BigNumber.from(web3BlockInfo.gasLimit.toString()),
          ethers.BigNumber.from(web3BlockInfo.gasUsed.toString()),
          ethers.BigNumber.from(web3BlockInfo.timestamp.toString())
        ],
        ethersBlockInfo.extraData,
        web3BlockInfo.mixHash,
        ethers.BigNumber.from(web3BlockInfo.nonce),
        ethersBlockInfo.baseFeePerGas
    ]
    console.log('######################');
    // console.log(blockHeaderPayload);

    expect(await second.checkBlockHeader(blockHeaderPayload, web3BlockInfo.hash)).to.be.true;

  });
});
