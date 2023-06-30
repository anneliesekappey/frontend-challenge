<script lang="ts">
    import { onMount } from 'svelte';
  
    let isMounted = false;
  
    onMount(() => {
      isMounted = true;
    });
  </script>
  
  <div class="hero-container">
    {#if isMounted}
      <div class="hero-content-container">
        <div class="heading">
          <h1>We invest in the world’s potential</h1>
        </div>
        <p class="supporting-text">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="button-container">
          <button class="btn-primary btn btn-typography">
            Learn more
            <img src="/public/images/arrow-right.png" alt="Arrow" class="icon-arrow" />
          </button>
          <button class="btn-secondary btn btn-typography-secondary">
            Watch video
            <img src="/public/images/video-camera.png" alt="Camera" class="icon-video" />
          </button>
        </div>
      </div>
      <div class="hero-image-container">
        <img src="public/images/webdevchar.png" alt="Web Developer" class="hero-image" />
      </div>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
  
  <style>
    .hero-container {
      display: flex;
      height: 748px;
      padding-top: 96px;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      background: var(--white, #FFF);
    }
  
    .hero-content-container {
      display: flex;
      width: 866px;
      height: 472px;
      padding-left: 0px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
  
    .hero-image-container {
      display: flex;
      width: 785.53px;
      height: 630px;
      justify-content: flex-end;
    }
  
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .heading {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      padding-left: 80px;
      color: #111928;
      text-align: center;
      font-size: 60px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 60px;
    }
  
    .supporting-text {
      display: flex;
      width: 768px;
      flex-direction: column;
      padding-left: 80px;
      color: #6B7280;
      text-align: center;
      font-size: 20px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  
    .button-container {
      display: flex;
      gap: 16px;
    }
  
    .btn {
      display: inline-flex;
      padding: 14px 23px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      border-radius: 8px;
    }
  
    .btn-primary {
      background: var(--primary-600, #1C64F2);
      color: var(--white, #FFF);
    }
  
    .btn-typography {
      font-size: 16px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  
    .icon-arrow {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  
    .btn-secondary {
      border: 1px solid var(--gray-300, #D1D5DB);
      color: #1F2A37;
    }
  
    .btn-typography-secondary {
      font-size: 16px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  </style>
  