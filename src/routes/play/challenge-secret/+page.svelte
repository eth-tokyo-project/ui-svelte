<script>
    import ChallengeElement from '../Challenge.svelte';
  
    const instancesDescriptions = [
      {href: 'https://github.com/eth-tokyo-project/flagship/blob/contracts-foundry/packages/forge/src/challenges/CTE/Lottery2Challenge.sol', text: 'Lottery2Challenge.sol'},
    ];
  </script>
  <svelte:head>
    <title>Guess the secret number</title>
  </svelte:head>
  
  <ChallengeElement nameChallenge="Guess the secret number" nChallenge={1} {instancesDescriptions}>
    <span slot="title">
      Guess the secret number
      </span>
    <div slot="content">
      <blockquote>
        <p>Shhh its secret!</p>
      </blockquote>
      <p>
        Can you guess a secret number?
      </p>
      
      Contracts;<br />
        <ul>
          <li><a class="link"
              href="https://github.com/eth-tokyo-project/flagship/blob/contracts-foundry/packages/forge/src/challenges/CTE/Lottery2Challenge.sol"
              target="_blank">Guess the secret number - Lottery2Challenge.sol</a></li>
        </ul>
        <img src="/challenge2.png" alt="code" />
    </div>
  </ChallengeElement>
  