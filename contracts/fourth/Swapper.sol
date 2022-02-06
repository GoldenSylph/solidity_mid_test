//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";

contract Swapper {

    uint256 public constant MAX_BP = 10000;
    uint256 public constant PRECISION = 1e12;

    // max impact is in base points
    function calcMaxAmount(uint16 maxImpact, address uniswapv2pair) external view returns (uint256 amount) {
        IUniswapV2Pair pair = IUniswapV2Pair(uniswapv2pair);
        (uint112 token0ReserveRaw, uint112 token1ReserveRaw,) = pair.getReserves();

        uint256 token0Reserve = uint256(token0ReserveRaw);
        uint256 token1Reserve = uint256(token1ReserveRaw);
        uint256 currentPrice = token0Reserve * PRECISION / token1Reserve;
        uint256 priceAfterImpact = currentPrice * uint256(maxImpact) / MAX_BP;

        amount = token1Reserve * PRECISION - token0Reserve * priceAfterImpact;
    }

}
