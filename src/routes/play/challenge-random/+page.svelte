<script>
    import ChallengeElement from '../Challenge.svelte';
  
    const instancesDescriptions = [
      {href: 'https://github.com/eth-tokyo-project/flagship/blob/contracts-foundry/packages/forge/src/challenges/CTE/Lottery3Challenge.sol', text: 'Lottery3Challenge.sol'},
    ];
  </script>
  <svelte:head>
    <title>Guess the secret number</title>
  </svelte:head>
  
  <ChallengeElement nameChallenge="Guess the random number" nChallenge={2} {instancesDescriptions}>
    <span slot="title">
      Guess the random number
      </span>
    <div slot="content">
      <blockquote>
        <p>ups, now its random!</p>
      </blockquote>
      <p>
        Can you guess a random number?
      </p>
      
      Contracts;<br />
        <ul>
          <li><a class="link"
              href="https://github.com/eth-tokyo-project/flagship/blob/contracts-foundry/packages/forge/src/challenges/CTE/Lottery3Challenge.sol"
              target="_blank">Guess the secret number - Lottery3Challenge.sol</a></li>
        </ul>
        <img src="/challenge3.png" alt="code" />
    </div>
  </ChallengeElement>
  