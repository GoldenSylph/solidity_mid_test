# Solidity Mid Test

## First task

Firstly read docs, found about consensus contract (cause Fuse is DPoS). Then found proxy of the contact. Did research of the ABI of implementation begind the proxy. By the way, Eternal Storage as upgradability pattern sucks. Did the setup of the project based on my personal template. Then built the contract at `contracts/first/First.sol` and an interface `contracts/first/ICoreConsensus.sol` which declares two methods that I need to: check if an address is validator and to obtain some validator address to impersonate. Then I wrote a test which tries to call secured method `testModifier` as non-validator and as validator signer.

You can test the first task by executing `npx hardhat test`. It will fork the Fuse mainnet and execute test.

## Second task

## Third task

## Fourth task
