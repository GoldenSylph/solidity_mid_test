//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";

contract Second is Context {

    struct BlockHeader {
        bytes32 parentHash;
        bytes32 ommersHash;
        uint256 gasLimit;
        uint256 gasUsed;

    }

}
