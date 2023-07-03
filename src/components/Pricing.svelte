<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const selectedInterval = writable('monthly');
  
  onMount(async () => {
    try {
        const response = await fetch('/proxy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                interval: $selectedInterval, 
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
  });

</script>

<!-- <main>
    <select bind:value={$selectedInterval}>
    <option value="monthly">Monthly</option>
    <option value="yearly">Yearly</option>
    </select>
</main> -->

<style>
  .pricing-container {
    display: flex;
    padding: 64px 80px 96px 80px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    background: var(--white, #FFF);
  }

  .inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
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
    line-height: 125%;
  }

  .description {
    display: flex;
    width: 768px;
    flex-direction: column;
    color: var(--gray-500, #6B7280);
    text-align: center;
    font-size: 20px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .switch {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-bottom: 48px;
  }

  .word {
    color: var(--gray-900, #111928);
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  .toggle-image {
    width: 36px;
    height: 20px;
  }

  .pricing-cards {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 40px;
    align-self: stretch;
  }

  .plan-container {
    display: flex;
    padding: 32px;
    align-items: center;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--gray-200, #E5E7EB);
    background: var(--white, #FFF);
    box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
  }

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    align-self: stretch;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    color: var(--gray-900, #111928);
    text-align: center;
    font-size: 24px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .price {
    color: var(--gray-900, #111928);
    font-size: 48px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
  }

  .cta-main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  }

  .call-to-action {
    color: var(--primary-600, #1C64F2);
    text-align: center;
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  .arrow-image {
    width: 20px;
    height: 20px;
  }

  .button {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--gray-900, #111928);
  }

  .button-text {
    color: var(--white, #FFF);
    font-size: 14px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .button-center {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--primary-600, #1C64F2); 
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }

  .item-1 {
    display: flex;
    padding: 2px 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  }

  .feature-image {
    width: 20px;
    height: 20px;
  }

  .feature {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    color: var(--gray-900, #111928);
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .strike-through {
    text-decoration: line-through;
    color: #6B7280;
  }

  .popular-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    color: var(--gray-900, #111928);
    text-align: center;
    font-size: 14px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .sub-header {
    display: flex;
    padding: 2px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: var(--blue-50, #E2E4EB);
    color: var(--primary-800, #1E429F);
    text-align: center;
    font-size: 14px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

</style>

<div class="pricing-container">
    <div class="inner-container">
      <div class="card-container">
        <div class="heading">
          Designed for business teams like yours
        </div>
        <div class="description">
          Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </div>
        <div class="switch">
          <div class="word">
            Monthly
          </div>
          <img class="toggle-image" src="/public/images/toggle.png" alt="Toggle">
          <div class="word">
            Yearly
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-cards">
      <div class="plan-container">
        <div class="card-header">
          <div class="title">
            Starter
          </div>
          <div class="price">
            $29
          </div>
          <div class="cta-main">
            <div class="call-to-action">
              Go to annual plan
            </div>
            <img class="arrow-image" src="/public/images/arrow-narrow-right.png" alt="Arrow">
          </div>
          <div class="button">
            <div class="button-text">
              Get started
            </div>
          </div>
          <div class="list">
            <div class="item-1">
              <img class="feature-image" src="/public/images/credit-card.png" alt="Credit card">
              <div class="feature">
                All tools you need to manage payments
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="/public/images/paper-airplane.png" alt="Paper airplane">
              <div class="feature strike-through">
                Get hundreds of feature updates
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/presentation-chart-bar.png" alt="Presentation chart bar">
              <div class="feature strike-through">
                Financial reconciliation and reporting
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/chat.png" alt="Chat">
              <div class="feature strike-through">
                24×7 phone, chat, and email support
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-container">
        <div class="card-header popular-header">
          <div class="sub-header">
            Most popular
          </div>
          <div class="title">
            Pro
          </div>
          <div class="price">
            $199
          </div>
          <div class="cta-main">
            <div class="call-to-action">
              Go to annual plan
            </div>
            <img class="arrow-image" src="/public/images/arrow-narrow-right.png" alt="Arrow">
          </div>
          <div class="button-center">
            <div class="button-text">
              Get started
            </div>
          </div>
          <div class="list">
            <div class="item-1">
              <img class="feature-image" src="/public/images/credit-card.png" alt="Credit card">
              <div class="feature">
                All tools you need to manage payments
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="/public/images/paper-airplane.png" alt="Paper airplane">
              <div class="feature">
                Get hundreds of feature updates
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/presentation-chart-bar.png" alt="Presentation chart bar">
              <div class="feature strike-through">
                Financial reconciliation and reporting
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/chat.png" alt="Chat">
              <div class="feature strike-through">
                24×7 phone, chat, and email support
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-container">
        <div class="card-header">
          <div class="title">
            Platinum
          </div>
          <div class="price">
            $599
          </div>
          <div class="cta-main">
            <div class="call-to-action">
              Go to annual plan
            </div>
            <img class="arrow-image" src="/public/images/arrow-narrow-right.png" alt="Arrow">
          </div>
          <div class="button">
            <div class="button-text">
              Get started
            </div>
          </div>
          <div class="list">
            <div class="item-1">
              <img class="feature-image" src="/public/images/credit-card.png" alt="Credit card">
              <div class="feature">
                All tools you need to manage payments
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="/public/images/paper-airplane.png" alt="Paper airplane">
              <div class="feature">
                Get hundreds of feature updates
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/presentation-chart-bar.png" alt="Presentation chart bar">
              <div class="feature">
                Financial reconciliation and reporting
              </div>
            </div>
            <div class="item-1">
              <img class="feature-image" src="public/images/chat.png" alt="Chat">
              <div class="feature">
                24×7 phone, chat, and email support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
