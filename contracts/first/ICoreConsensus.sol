//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ICoreConsensus {
    function isValidator(address _address) external view returns(bool);
    function currentValidatorsAtPosition(uint256 _p) external view returns(address);
}
