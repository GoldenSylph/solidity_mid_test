const { BigNumber } = require('ethers');
const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-bignumber')());
const {ethers, getNamedAccounts, network} = require('hardhat');

describe('fourth', () => {

  const uniswapPairAddress = "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc"; // USDC / ETH

  it('max swap amount check', async () => {

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
    const swapperDeployment = await deployments.get('Swapper');
    const swapper = await ethers.getContractAt("Swapper", swapperDeployment.address);

    const precision = await swapper.PRECISION();
    const MAX_BP = await swapper.MAX_BP();

    const pair = await ethers.getContractAt("IUniswapV2Pair", uniswapPairAddress);

    const priceImpact = ethers.BigNumber.from('9000'); // In base points

    const [token0Reserve, token1Reserve] = await pair.connect(deployer).getReserves();
    const currentPrice = token0Reserve.mul(precision).div(token1Reserve);
    const impactedPrice = currentPrice.mul(priceImpact).div(MAX_BP);
    const maxAmountExpected = token1Reserve.mul(precision).sub(token0Reserve.mul(impactedPrice));

    // don't forget that the returning value is product of PRECISION constant
    expect(await swapper.calcMaxAmount(priceImpact, pair.address)).to.be.equal(maxAmountExpected);

  });
});
