# Solidity Mid Test

## First task

Firstly read docs, found about consensus contract (cause Fuse is DPoS). Then found proxy of the contact. Did research of the ABI of implementation begind the proxy. By the way, Eternal Storage as upgradability pattern sucks. Did the setup of the project based on my personal template. Then built the contract at `contracts/first/First.sol` and an interface `contracts/first/ICoreConsensus.sol` which declares two methods that I need to: check if an address is validator and to obtain some validator address to impersonate. Then I wrote a test which tries to call secured method `testModifier` as non-validator and as validator signer.

You can test the first task by executing `npx hardhat test`. It will fork the Fuse mainnet and execute test.

## Second task

## Third task

1. `Is there a difference in gas efficiency between the two ways to return the person age?` - Yes, because the A variant is allocating a reference type variable in memory and additionally performing assignment operation. But the B variant is just storing the result of storage read in stack and then just passing it to the end return mechanism of the contract.

2. `if so why?` - Here is an OPCODE analysis of both variants:

![The OPCODE analysis of the variants](./third_ref.png)

This is part of the functions executions where the business logic is. To the left is the execution of B variant and to the opposite side is A variant. You can see, that in the variant A there is much more MLOADs and MSTOREs OPCODE which read and allocate the memory for the `p` variable. The main difference is at the center of both variants. You can see that in the A variant is an allocation block for the variable, instead of just adding the reference to storage at mark `259 SLOAD` in the variant B.

You can also check that the A variant is more expensive by executing `npx hardhat test`. It will fork the Fuse mainnet (just for fun and for not performing an unnecessary work on network management) and execute test.

## Fourth task
