//@ts-nocheck

import { get } from "svelte/store";
import { Contract } from "@ethersproject/contracts";
import deployedContracts from "./deployedContracts";

import { chainId, signer } from "./eth";
//import abiFactory from "./abi.json";

const contractsDict = {};

const abiFactory = [
    "function mint(address _player, address _challenge, bytes32 title, bytes32 challengeName, bytes32 desc, bytes calldata _signature) external",
    "function balanceOf(address, uint256) external view returns(uint256)",
    "function challengesAddrToId(address) external view returns(uint256)"
]

export default async function getContract() {
  const $signer = await get(signer);
  const $chainId = await get(chainId);
  
  const contract = contractsDict[$chainId];
  if (contract) {
    return contract.connect($signer);
  }

  if (!deployedContracts[$chainId]) {
    throw new Error(`No contracts address for ${$chainId}`);
  }
  

  contractsDict[$chainId] = new Contract(deployedContracts[$chainId].badgesNft, abiFactory, $signer);
  return contractsDict[$chainId];  
}