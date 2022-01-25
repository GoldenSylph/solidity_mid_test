//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";

import "./ICoreConsensus.sol";

contract First is Context {

    ICoreConsensus internal coreConsensus;

    constructor(address _coreConsensus) {
        coreConsensus = ICoreConsensus(_coreConsensus);
    }

    modifier onlyFuseValidator {
        require(coreConsensus.isValidator(_msgSender()), "onlyFuseValidator");
        _;
    }

    function testModifier() onlyFuseValidator view external returns(uint256) {
        return 0;
    }

}
