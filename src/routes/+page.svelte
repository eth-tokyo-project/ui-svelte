<svelte:head>
  <title>Flagship | CTF on chain</title>
</svelte:head>

<div class="min-h-screen max-w-md md:max-w-full flex flex-col">
  <div
    class="justify-start w-full h-1/2 min-h-[360px] flex-grow text-center hero bg-black bg-no-repeat bg-right"
    style="background-image: url(/logo.svg); background-size: 800px 300px;"
  >
    <div class="flex flex-col mx-12 items-start">
      <div
        class="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900"
    
      >
        Onchain CTF Protocol
      </div>
      <br />
      <div class="text-white text-xl">
        Solve challenges and build your on-chain resume with your favourite blockchain
      </div>
      <div class="text-white text-xl">
        on the leading decentralised capture the flag protocol.
      </div>
      <br />
      <a href="/play" class="btn btn-primary w-60 mx-4 md:mx-0 text-xl"
        >Get Started!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </a>
    </div>
  </div>
  <div class="bg-black w-full h-1/2 py-5 flex-grow hero">
    <div class="flex flex-col xl:flex-row">
      <div class="card w-96 bg-zinc-900 shadow-xl m-2">
        <div class="card-body text-gray-500">
          <h2 class="card-title">Description</h2>
          <p>
            Onchain Capture The Flag Protocol is a competition that allows you
            to deploy CTF challenges in a permisionless way. Once completing the
            challenge the player is rewarded with a “Proof of Hack” NFT
          </p>
        </div>
      </div>
      <div class="card w-96 bg-zinc-900 shadow-xl m-2">
        <div class="card-body text-gray-500">
          <h2 class="card-title text-gray-500">How do i play? 🕹️</h2>
          <p>
            First make sure that you have installed the Metamask extension.<br
            />
            Then make sure you have some some faucet on the chain you're going to
            play, which you will use to send transactions.
            <br />
            Finally click play to connect your wallet.
          </p>
        </div>
      </div>
      <div class="card w-96 bg-zinc-900 shadow-xl m-2">
        <div class="card-body">
          <h2 class="card-title text-gray-500">How to build your own CTF challenge?</h2>
          <p class="text-gray-500">
            You just need to deploy a challenge factory, the challenge factory
            should respect the onchain CTF protocol interface. This factory is
            responsable for deploying your challenge. Please see our <a
              class="link-primary"
              href="https://github.com/eth-tokyo-project/flagship/blob/main/packages/forge/src/challenges/CTE/Lottery1.sol"
              target="_blank">Challenge Demo contract</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>