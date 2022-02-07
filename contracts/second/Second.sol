//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RLPEncode.sol";

contract Second {
    using RLPEncode for RLPEncode.BlockHeader;

    function checkBlockHeader(RLPEncode.BlockHeader calldata blockHeader, bytes32 expectedBlockHash) external view returns(bool) {
        // console.logBytes(blockHeader.encodeBlockHeader());
        bytes32 actualBlockHash = keccak256(blockHeader.encodeBlockHeader());
        // console.log("---");
        // console.logBytes32(actualBlockHash);
        return expectedBlockHash == actualBlockHash;
    }
}
