//@ts-nocheck
import { get } from "svelte/store";
import { Contract } from "@ethersproject/contracts";

import { chainId, signer } from "./eth";
//import abiFactory from "./abi.json";

import deployedContracts from "$lib/deployedContracts.js";


const contractsDict = {};

const abiFactory = [
    "function deployChallenge(address) external",
    "function getChallengesInstances(address,address) external view returns(address[] memory)",
    "function checkChallenge(address user, address _challengeFactory) public view returns(bool)"
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
  

  contractsDict[$chainId] = new Contract(deployedContracts[$chainId].challengeManager, abiFactory, $signer);
  return contractsDict[$chainId];  
}