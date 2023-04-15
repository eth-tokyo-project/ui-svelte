<script>
    import { onMount } from 'svelte';
    import { login, init, wallet, chainId, changeNetwork } from '$lib/eth.js';
    // import { dev } from '$app/environment';
    
    import Header from './Header.svelte';
    import deployedContracts from '$lib/deployedContracts.js';
    
    onMount(
      async () => {
        // add a test to return in SSR context
        try {
          await init();
        } catch (err) {}
      }
    );
  </script>
  
  <svelte:head>
    <script type="text/javascript" src="https://unpkg.com/web3modal@1.9.8/dist/index.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"></script>
  </svelte:head>
  {#if !$wallet}
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="text-center lg:text-left">
                  <h1 class="text-4xl font-bold">Connect now!</h1>
                  <p class="py-6">To start playing please connect your metamask to this page</p>
                </div>
              
              <div class="form-control mt-6">
                <button on:click={login} class="btn btn-primary">Connect</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!--  /* chaiin 421613 31337*/  -->
  {:else if !Object.keys(deployedContracts).map(e => parseInt(e, 10)).includes($chainId)}
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="text-center lg:text-left">
                  <h1 class="text-4xl font-bold">Wrong network</h1>
                  <p class="py-6">
                    Please connect to <b>one of this chains</b>, you can search and 
                    add it from <a class="link-primary" href="https://chainlist.org/?testnets=true" rel="noreferrer" target="_blank">https://chainlist.org/</a>
                  </p>
                  <!--
                  <ul>
                      <li>- chainId: 5, <a class="link-secondary" href="https://chainlist.org/chain/5" target="_blank">chainlist</a></li>
                      <li>- chainId: 5001, <a class="link-secondary" href="https://chainlist.org/chain/5001" target="_blank">chainlist</a></li>
                      <li>- chainId: 167004, <a class="link-secondary" href="https://chainlist.org/chain/167004" target="_blank">chainlist</a></li>
                      <li>- chainId: 534353, <a class="link-secondary" href="https://chainlist.org/chain/534353" target="_blank">chainlist</a></li>
                      <li>- chainId: 44787, <a class="link-secondary" href="https://chainlist.org/chain/44787" target="_blank">chainlist</a></li>
                      <li>- chainId: 1442, <a class="link-secondary" href="https://chainlist.org/chain/1442" target="_blank">chainlist</a></li>
                  </ul>
                  -->
                </div>
              
              <div class="form-control mt-6 flex">
                <button on:click={() => { changeNetwork(5) }} class="btn btn-sm btn-primary my-1">Change to Goerli</button>
                <button on:click={() => { changeNetwork(5001) }} class="btn btn-sm btn-primary my-1">Change to Mantle</button>
                <button on:click={() => { changeNetwork(167004) }} class="btn btn-sm btn-primary my-1">Change to Taiko</button>
                <button on:click={() => { changeNetwork(534353) }} class="btn btn-sm btn-primary my-1">Change to Scroll</button>
                <button on:click={() => { changeNetwork(1442) }} class="btn btn-sm btn-primary my-1">Change to PolygonZKEvm</button>
                <button on:click={() => { changeNetwork(44787) }} class="btn btn-sm btn-primary my-1">Change to CELO</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  {:else}
    <Header />
    <slot />
  {/if}
  