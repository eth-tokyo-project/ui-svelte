# Instructions

### start a node
```sh
anvil
```

### deploy the contracts

Using default anvil keys

```sh
(base) ➜  hackaton-tokio-contracts git:(main)  forge script script/Deploy.s.sol --rpc-url http://127.0.0.1:8545 --private-key=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 --broadcast
[⠢] Compiling...
No files changed, compilation skipped
Script ran successfully.

== Return ==
badge: address 0x5FbDB2315678afecb367f032d93F642f64180aa3
challengeManager: address 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
challenge1: address 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
challenge2: address 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
challenge3: address 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707

```

### Send eth to your account

Example
```sh
 cast send 0xC0de4Cc8dD7E721eA567788b48e7F08F966005BB --value 1ether --rpc-url http://127.0.0.1:8545 --private-key=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```