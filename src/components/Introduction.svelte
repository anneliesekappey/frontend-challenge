<script lang="ts">
    import { onMount } from 'svelte';
  
    let isMounted = false
  
    onMount(() => {
      isMounted = true;
    });
  </script>
  
  <style>
    .introduction {
      display: flex;
      padding: 64px 80px 96px 80px;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      background: var(--white, #FFF);
    }
  
    .heading {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: stretch;
      color: var(--gray-900, #111928);
      text-align: center;
      font-size: 36px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  
    .supporting-text {
      display: flex;
      width: 891px;
      flex-direction: column;
      color: var(--gray-500, #6B7280);
      text-align: center;
      font-size: 18px;
      font-family: Arial;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  
    .image-container {
      display: grid;
      grid-template-columns: 632px 308px 306px;
      height: 240px;
      padding: 64px 80px 96px 80px;
      grid-gap: 10px;
      align-self: stretch;
      justify-content: center;
      align-items: center;
    }

    .image-container-2 {
      display: grid;
      grid-template-columns: 329px 590px 329px;
      height: 240px;
      padding: 64px 80px 96px 80px;
      grid-gap: 10px;
      align-self: stretch;
      justify-content: center;
      align-items: center;
    }
  
  </style>
  
  <div class="introduction">
    <h2 class="heading">
      We didn't reinvent the wheel
    </h2>
    <p class="supporting-text">
      We are strategists, designers, and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
    </p>
      <div class="image-container">
        <img src="/public/images/image-1.png" alt="Men working" />
        <img src="/public/images/image-2.png" alt="Meeting" />
        <img src="/public/images/image-3.png" alt="Office" />
        </div>
        <div class="image-container-2">
        <img src="/public/images/image-4.png" alt="Woman working" />
        <img src="/public/images/image-5.png" alt="Work meeting" />
        <img src="/public/images/image-6.png" alt="Rest area" />
    </div>
      </div>
  