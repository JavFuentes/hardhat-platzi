// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;

contract Counter {
    uint256 counter;

    constructor(uint256 _counter) {
        counter = _counter;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function increment() public {
        counter++;
    }
}