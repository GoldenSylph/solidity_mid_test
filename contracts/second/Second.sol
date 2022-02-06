//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RLPEncode.sol";

contract Second {

    struct BlockHeader {
        bytes32 parentHash;
        bytes32 ommersHash;
        address beneficiary;
        bytes32 stateRoot;
        bytes32 receiptsRoot;
        bytes32 logsBloom;
        uint256 difficulty;
        uint256 number;
        uint256 gasLimit;
        uint256 gasUsed;
        uint256 timestamp;
        bytes extraData;
        bytes32 mixHash;
        uint64 nonce;
    }

    function checkBlockHeader(BlockHeader calldata blockHeader, uint256 blockNumber) external view returns(bool) {
        bytes32 expectedBlockHash = blockhash(blockNumber);

        // (
        //   "bytes32", "bytes32", "address", "bytes32", "bytes32", "bytes32", "bytes",
        //   "uint256", "uint256", "uint256", "uint256", "uint256",
        //   "bytes", "bytes32", "uint64"
        // ),
        {
            bytes memory encoded = abi.encode(
              blockHeader.parentHash,
              blockHeader.ommersHash,
              blockHeader.beneficiary,
              blockHeader.stateRoot,
              blockHeader.transactionsRoot,
              blockHeader.receiptsRoot,
              blockHeader.logsBloom,
              blockHeader.difficulty,
              blockHeader.number,
              blockHeader.gasLimit,
              blockHeader.gasUsed,
              blockHeader.timestamp,
              blockHeader.extraData,
              blockHeader.mixHash,
              blockHeader.nonce
            );
            bytes32 actualBlockHash = keccak256(
                encoded
            );
        }

        return false;// expectedBlockHash == actualBlockHash;
    }

}
