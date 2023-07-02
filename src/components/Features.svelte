<script lang="ts">
</script>

<style lang="uno">
  .container {
    display: flex;
    padding: 96px 80px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    background: var(--white, #FFF);
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    color: var(--gray-900, #111928);
    font-size: 36px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .supporting-text {
    display: flex;
    width: fixed;
    max-width: 768px;
    flex-direction: column;
    color: var(--gray-500, #6B7280);
    font-size: 20px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding-bottom: 48px;
    text-align: left;
  }

  .icon-shapes {
    display: flex;
    width: 48px;
    height: 48px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: var(--blue-50, #E2E4EB);
  }

  .features-row {
    display: flex;
    align-items: first baseline;
    justify-content: center;
    max-width: 100%;
    gap: 48px;
  }

  .feature {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
  }

  .feature-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  .feature-title {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    color: var(--gray-900, #111928);
    padding-top: 16px;
    font-size: 20px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  .feature-description {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    color: var(--gray-500, #6B7280);
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
</style>

<div class="container">
    <div class="text-container">
  <h2 class="heading">Designed for business teams like yours</h2>
  <p class="supporting-text">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
</div>
  <div class="features-row">
    <div class="feature">
        <div class="icon-shapes">
      <img src="/public/images/presentation-chart-line.png" alt="Marketing Icon" class="feature-icon" />
    </div>
      <h3 class="feature-title">Marketing</h3>
      <p class="feature-description">Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.</p>
    </div>
    <div class="feature">
        <div class="icon-shapes">
      <img src="/public/images/academic-cap.png" alt="Legal Icon" class="feature-icon" />
    </div>
      <h3 class="feature-title">Legal</h3>
      <p class="feature-description">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
    </div>
    <div class="feature">
        <div class="icon-shapes">
      <img src="/public/images/briefcase.png" alt="Business Automation Icon" class="feature-icon" />
    </div>
      <h3 class="feature-title">Business Automation</h3>
      <p class="feature-description">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
    </div>
  </div>
</div>
