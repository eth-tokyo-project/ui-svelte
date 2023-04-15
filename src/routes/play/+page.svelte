<script>
    import { wallet } from '$lib/eth.js';    
    import { Challenges } from '$lib/store.js';    
  </script>
  <svelte:head>
    <title>Demo challenges</title>
  </svelte:head>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="text-center lg:text-left">
              <h1 class="text-5xl font-bold">Challenges</h1>
              {#if $wallet}
                <p class="py-6">Welcome 
                  <b>{$wallet.slice(0,6)}...{$wallet.slice(-6)}</b>
                  <br />
                  <span class="underline">Please pick your challenge:</span>
                </p>
              {/if}
            </div>
            
              <!-- challenge 0 -->
              <div class="form-control mt-6">
                <div class="tooltip" data-tip="Lets warm up">
                  <a href="/play/challenge-guess" class="btn btn-primary" class:btn-link={$Challenges[0].solved}>
                    {#if $Challenges[0].solved}
                      <span class="text-green-500">✓</span>
                    {/if}
                    <span class:line-through={$Challenges[0].solved}>Guess the number</span>
                  </a>
                </div>
              </div>

              <!-- challenge 1 -->
              <div class="form-control mt-6">
                <div class="tooltip" data-tip="Could you crack it?">
                  <a href="/play/challenge-secret" class="btn btn-primary" class:btn-link={$Challenges[1].solved}>
                    {#if $Challenges[1].solved}
                      <span class="text-green-500">✓</span>
                    {/if}
                    <span class:line-through={$Challenges[1].solved}>Guess the secret number</span>
                  </a>
                </div>
              </div>

              <!-- challenge 2 -->
              <div class="form-control mt-6">
                <div class="tooltip" data-tip="Even a random one?">
                  <a href="/play/challenge-random" class="btn btn-primary" class:btn-link={$Challenges[2].solved}>
                    {#if $Challenges[2].solved}
                      <span class="text-green-500">✓</span>
                    {/if}
                    <span class:line-through={$Challenges[2].solved}>Guess the random number</span>
                  </a>
                </div>
              </div>
            
            
          </div>
        </div>
    </div>
  </div>