//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";

contract Second is Context {

    struct BlockHeader {
        bytes32 parentHash;
        bytes32 ommersHash;
        address beneficiary;
        bytes32 stateRoot;
        bytes32 transactionsRoot;
        bytes32 receiptsRoot;
        bytes logsBloom;
        uint256 difficulty;
        uint256 number;
        uint256 gasLimit;
        uint256 gasUsed;
        uint256 timestamp;
        bytes extraData;
        bytes32 mixHash;
        uint64 nonce;
    }

    function checkBlockHeader(BlockHeader calldata blockHeader, uint256 blockNumber) external pure returns(bool) {
        bytes32 expectedBlockHash = blockhash(blockNumber);
        bytes32 actualBlockHash = keccak256(abi.encode(
          (
            "bytes32", "bytes32", "address", "bytes32", "bytes32", "bytes32", "bytes",
            "uint256", "uint256", "uint256", "uint256", "uint256",
            "bytes", "bytes32", "uint64"
          ),
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
        ));
        return expectedBlockHash == actualBlockHash;
    }

}
