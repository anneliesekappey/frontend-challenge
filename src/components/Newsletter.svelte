<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

  let email: string = '';
  let isEmailAdded = false;
  let error = writable('');
  let successMessage = writable('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function subscribe(event: Event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      error.set('Invalid email address');
      return;
    }

  try {
    const response = await fetch('/src/routes/api/newsletter.js', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  if (response.ok) {
    isEmailAdded = true;
    console.log('Email added')
    clearForm();

  } else if (response.status === 400) {
    error.set('Invalid email address');

  } else {
    error.set('An error occurred. Please try again later.');
  }

} catch (error) {
  console.error('An error occurred:', error);
}
  }

  function clearForm() {
    email = '';
  }

  function clearMessages() {
    error.set('');
    successMessage.set('');
  }

  onMount(() => {
    let isMounted = false;
    isMounted = true;
  })

  onDestroy(() => {
    clearMessages();
  });

</script>

<style lang="uno">
  .container {
    display: flex;
    padding: 96px 80px;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    background: var(--white, #FFF);
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    align-self: stretch;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--gray-900, #111928);
    text-align: center;
    font-size: 36px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .subtitle {
    display: flex;
    width: 672px;
    flex-direction: column;
    justify-content: center;
    color: var(--gray-500, #6B7280);
    text-align: center;
    font-size: 20px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .email {
    display: flex;
    flex-direction: row;
  }

  .input-container {
    display: flex;
    width: 344px;
    padding: 14px 16px;
    align-items: flex-start;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid var(--gray-200, #E5E7EB);
    background: var(--gray-50, #F9FAFB);
    }
  
  .icon-mail {
    width: 20px;
    height: 20px;
    color: #6B7280;
    }
  
  .email-input {
    display: flex;
    align-items: center;
    flex: 1;
    color: var(--gray-500, #6B7280);
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    }
  
  .email-input input {
    color: #6B7280;
    flex: 1;
    border: none;
    background: none;
    outline: none;
    }
  
  .subscribe-button {
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px 8px 8px 0px;
    background: var(--primary-600, #1C64F2);
    color: var(--white, #FFF);
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    }  

  .success-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #1C64F2;
    text-align: center;
    font-size: 20px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }  
  
  .small-text {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    color: #6B7280;
    font-size: 14px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
  }

   .privacy-policy {
    text-decoration: underline;
    color: #111928;
  }
</style>

<div class="container">
  <div class="content-container">
    <div class="title">
      <h2>Sign up for our newsletter</h2>
    </div>
    <div class="subtitle">
      <p>Stay up to date with the roadmap progress, announcements, and exclusive discounts. Feel free to sign up with your email.</p>
    </div>
    <div class="email">
    <div class="input-container">
      <div class="email-input">
        <img src="/public/images/mail.png" alt="envelope" class="icon-mail"/>
        <input type="email" bind:value={email} placeholder="Enter your email" />
      </div>
    </div>
    <button class="subscribe-button" on:click={subscribe}>Subscribe</button>
  </div>
  {#if isEmailAdded}
  <div class="success-message">Thank you for subscribing! Newsletter on its way to you!</div>
{/if}
    <div class="small-text">
      <p>We care about the protection of your data. Read our <span class="privacy-policy">Privacy Policy</span>.</p>
    </div>
  </div>
</div>

