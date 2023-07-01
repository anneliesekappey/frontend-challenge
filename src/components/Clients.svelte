<script lang="ts">
    import { onMount } from 'svelte';

    let isMounted = false
  
    onMount(() => {
      isMounted = true
    });
  </script>
  
  <style>
    .container {
      display: flex;
      padding: 96px 80px;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      background: var(--white, #FFF);
    }
  
    .heading {
      display: flex;
      width: 1360px;
      flex-direction: column;
      justify-content: center;
      color: var(--gray-900, #111928);
      text-align: center;
      font-size: 36px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      padding-bottom: 48px;
    }
  
    .logos {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 56px;
      flex-wrap: wrap;  
    }
  
    .logo {
      width: 128px;
      height: 41.758px;
      color: #4B5563;
    }
  
    .logo:nth-child(2) {
      width: 150px;
      height: 32.813px;
      color: #4B5563;
    }
  
    .logo:nth-child(3) {
      width: 128px;
      height: 39.988px;
      color: #4B5563;
    }
  
    .logo:nth-child(4) {
      width: 136px;
      height: 37.228px;
      color: #4B5563;
    }
  </style>
  
  <div class="container">
    <h1 class="heading">
      You'll be in good company
    </h1>
  
    <div class="logos">
      <img src="/public/images/google.png" alt="Google" class="logo" />
      <img src="/public/images/microsoft.png" alt="Microsoft" class="logo" />
      <img src="/public/images/spotify.png" alt="Spotify" class="logo" />
      <img src="/public/images/mailchimp.png" alt="Mailchimp" class="logo" />
    </div>
  </div>
  