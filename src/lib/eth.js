import {
  writable,
  get
} from "svelte/store";
import {
  Web3Provider
} from "@ethersproject/providers";

export const wallet = writable(null);
export const provider = writable(null);
export const signer = writable(null);
export const errorTx = writable(false);
export const networkDetails = writable({});
export const chainId = writable(-1);

/*
function hasMetamask() {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
}
*/

let _provider;


export async function init() {
  // provider = await web3Modal.connect();
  // if (web3Modal.cachedProvider) {
  _provider = new Web3Provider(window.ethereum, "any");
  const __p = _provider;
  __p.on("chainChanged", (oldNetwork) => {
    if (oldNetwork) {
      setTimeout(() => {
        init();
      }, 0);
    }
  });

  const _signer = await _provider.getSigner();
  const _wallet = await _signer.getAddress();

  window.ethereum.on('accountsChanged', function (accounts) {
    if (accounts[0] !== _wallet) {
      //document.location.reload()
      setTimeout(() => {
        init();
      }, 0);
    }
    // document.location.reload();
  });

  __p.on("accountsChanged", (accounts) => {
    if (accounts[0] !== _wallet) {
      //document.location.reload()
      setTimeout(() => {
        init();
      }, 0);
    }
  });

  provider.set(_provider);
  const _networkDetails = await _provider.getNetwork();
  networkDetails.set(_networkDetails);
  chainId.set(_networkDetails.chainId);
  provider.set(_provider);

  wallet.set(_wallet);
  signer.set(_signer);


  if (_wallet) {
    // algo
  }
}

export async function login() {
  try {
    // await window.web3Modal.connect();
    await window.ethereum.enable();
  } catch (err) {}

  await init();
}

export async function changeNetwork(_chainId) {
  const chainId = `0x${(_chainId).toString(16)}`;

  const extraData = {
    5: {
      chainName: "Goerli TestNet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
      blockExplorerUrls: ["https://goerli.etherscan.io/"],
    },
    10200: {
      chainName: "Gnosis Chiado Testnet",
      nativeCurrency: {
        name: "xDAI",
        symbol: "xDAI",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.chiadochain.net"],
      blockExplorerUrls: ["https://blockscout.chiadochain.net/"],
    },
    167004: {
      chainName: "Taiko testnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.a2.taiko.xyz"],
      blockExplorerUrls: ["https://explorer.a2.taiko.xyz/"],
    },
    534353: {
      chainName: "Scroll Testnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://alpha-rpc.scroll.io/l2", "https://scroll-alpha-public.unifra.io"],
      blockExplorerUrls: ["https://blockscout.scroll.io/"],
    },
    5001: {
      chainName: "Mantle Testnet",
      nativeCurrency: {
        name: "BIT",
        symbol: "BIT",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.testnet.mantle.xyz"],
      blockExplorerUrls: ["https://explorer.testnet.mantle.xyz/"],
    },
    44787: {
      chainName: "CELO Alfajores Testnet",
      nativeCurrency: {
        name: "CELO",
        symbol: "CELO",
        decimals: 18,
      },
      rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
      blockExplorerUrls: ["https://explorer.celo.org/alfajores/"],
    },
    1442: {
      chainName: "Polygon zkEVM Testnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.public.zkevm-test.net"],
      blockExplorerUrls: ["https://testnet-zkevm.polygonscan.com/"],
    }
  };

  if (!extraData[_chainId]) {
    alert("network not supported chain id:" +_chainId);
  }
  
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId
      }]
    });
  } catch (err) {
    // This error code indicates that the chain has not been added to MetaMask
    if (err.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",

        params: [{
          chainId,
          ...extraData[_chainId]
        }, ],

      });
  
    }
    /*
        await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
            {
              chainId: `0x${(5).toString(16)}`,
            }
          ]
        /*params: [
            {
              chainId: `0x${(80001).toString(16)}`,
              chainName: "Mumbai Polygon TestNet",
              nativeCurrency: {
                name: "MATIC",
                symbol: "matic",
                decimals: 18,
              },
              rpcUrls: ["https://matic-testnet-archive-rpc.bwarelabs.com/", "https://matic-mumbai.chainstacklabs.com/", "https://rpc-mumbai.matic.today/"],
              blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
            },
          ],
          */
    //});
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
          chainId
        }]
      });
    } catch(err) { /*empty */ }
    setTimeout(() => {
      window.location.reload();
    }, 700);
  }
}