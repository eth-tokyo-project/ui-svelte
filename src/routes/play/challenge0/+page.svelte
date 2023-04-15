<script>
    import deployedContracts from "$lib/deployedContracts.js";

    import { signer, wallet, chainId } from "$lib/eth";
    import * as ethers from "ethers";

    import ChallengeElement from '../Challenge.svelte';
  
    const nChallenge = 0;

    $: contracts = deployedContracts[$chainId] || {};

    $: addressChallenge = contracts.challengeFactory && contracts.challengeFactory.FactoryGuessTheNumberChallenge;
    
    

    $: if($wallet) {
        window.solve = async (lottery1) => {
            const abi = [
                "function guess(uint8 n) external",
            ];
            const c = new ethers.Contract(lottery1, abi, $signer);
            let tx = await c.guess(42);
            await tx.wait(1);
            
        }
    }


  </script>
  <svelte:head>
    <title>Warmup</title>
  </svelte:head>
  
  <ChallengeElement nameChallenge="Warmup" {nChallenge} {addressChallenge}>
    <span slot="title">
      Challenge 1
      </span>
    <div slot="content">
        <blockquote>
            <p>GuessTheNumber</p>
          </blockquote>
          <p>
            Let's begin with a simple warm up. Can you guess the number?
          </p>

  
      Contracts;<br />
        <ul>
          <li><a class="link" href="https://github.com/eth-tokyo-project/flagship/blob/contracts-foundry/packages/forge/src/challenges/CTE/Lottery1Challenge.sol" target="_blank">Guess the number - Lottery1Challenge.sol</a></li>
        </ul>
        <img src="/challenge1.png" />
    </div>
  </ChallengeElement>
  

