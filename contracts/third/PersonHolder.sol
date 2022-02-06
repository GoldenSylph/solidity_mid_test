//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonHolder {

    struct Person {
        uint256 age;
    }

    Person[] internal persons;

    constructor() {
        persons.push(Person({
          age: 21
        }));
    }

    // could be restricted to view function but it will disrupt the test
    function getPerson1(uint256 i) external returns (uint256) {
        Person memory p = persons[i];
        return p.age;
    }

    // could be restricted to view function but it will disrupt the test
    function getPerson2(uint256 i) external returns (uint256) {
        return persons[i].age;
    }

}
