//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RLPEncode.sol";

contract Second {
    using RLPEncode for RLPEncode.BlockHeader;

    function checkBlockHeader(RLPEncode.BlockHeader calldata blockHeader, uint256 blockNumber) external view returns(bool) {
        bytes32 expectedBlockHash = blockhash(blockNumber);
        bytes32 actualBlockHash = keccak256(blockHeader.encodeBlockHeader());
        return expectedBlockHash == actualBlockHash;
    }

}
