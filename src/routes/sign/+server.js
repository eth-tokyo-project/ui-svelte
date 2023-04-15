
import { error, json } from '@sveltejs/kit';
import * as ethers from 'ethers';

import { env } from '$env/dynamic/private';
import deployedContracts from '$lib/deployedContracts.js';


const abiFactory = [
  "function deployChallengparsnal view returns (string memory)",
  "function name() external view returns (string memory)",
  "function description() external view returns (string memory)"
];

const RPC = {
  31337: "http://127.0.0.1:8545",
  5: "https://rpc.ankr.com/eth_goerli",
  5001: "https://rpc.testnet.mantle.xyz",
  167004: "https://rpc.a2.taiko.xyz",
  534353: "https://scroll-prealpha.blockpi.network/v1/rpc/public",
  44787: "https://alfajores-forno.celo-testnet.org",
  1442: "https://rpc.public.zkevm-test.net",
  10200: "https://rpc.chiadochain.net"
};

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  console.log(env);
  const challenge = url.searchParams.get('challenge');
  const player = url.searchParams.get('player');
  const chainId = parseInt(url.searchParams.get('chainId'), 10);
 
  const _contracts = deployedContracts[chainId];
  const factoryAddress = _contracts.challengeManager;
  const contractAddress = _contracts.badgesNft;
  
  const rpcProvider = RPC[chainId] || '';
  if(!factoryAddress || !contractAddress || !rpcProvider) {
    throw error(400, 'params errors, unsupported chain id ' + chainId);
  }
  
  
  if (!player || !challenge) {
    throw error(400, 'params errors');
  }
 
  // todo check player has end challenge

  // based on the chain id we pick the right contract and rpc
  const provider = new ethers.providers.JsonRpcProvider(rpcProvider);
  const signer = new ethers.Wallet(env.DEPLOYMENT_MINTERPK, provider);

  const factory = new ethers.Contract(factoryAddress, abiFactory, signer);
  const solved = await factory.checkChallenge(player, challenge);
  if (!solved) {
    throw error(400, 'not solved');
  }

  const factoryChallenge = new ethers.Contract(challenge, challengeFactoryAbi, signer);


  const nftTitle = await factoryChallenge.title();
  const nftName = await factoryChallenge.name();
  const nftDescription = await factoryChallenge.description();    

  const hashed = ethers.utils.solidityKeccak256(
      ['address', 'address', 'address', 'bytes32', 'bytes32', 'bytes32'],
      [
        contractAddress,
        challenge,
        player,
        ethers.utils.formatBytes32String(nftTitle),
        ethers.utils.formatBytes32String(nftName),
        ethers.utils.formatBytes32String(nftDescription)
      ]);

    const signature = await signer.signMessage(ethers.utils.arrayify(hashed))

	return json({
    keccak: hashed,
		signature,
    title: ethers.utils.formatBytes32String(nftTitle),
    name: ethers.utils.formatBytes32String(nftName),
    description: ethers.utils.formatBytes32String(nftDescription)
	});
}