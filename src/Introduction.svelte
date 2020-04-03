<script>
  import { Icon, Button } from './UI';
</script>

<style>
  .wrapper {
    height: calc(100vh);
    max-height: 110rem;
    width: 100%;
    position: relative;
  }

  .background-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: var(--height-nav);
    z-index: 10;
  }

  .background-wrapper::before {
    width: 70%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-dark-blue);
    height: 100%;
    content: '';
    z-index: -1;
    border-bottom-right-radius: 25rem;
  }

  h2 {
    margin: 0;
    font-size: 4rem;
    color: var(--color-white);
  }

  .container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: -10rem;
  }

  .content {
    width: 40rem;
    color: var(--color-white);
  }

  .image-container {
    width: 54rem;
    border-top-left-radius: 20rem;
    overflow: hidden;
  }

  @media screen and (max-width: 76.8em) {
    .image-container {
    }
  }

  .image-container img {
    width: 100%;
  }

  .content :global(.icon) {
    margin-right: 0.5rem;
  }
</style>

<div class="wrapper">
  <div class="background-wrapper">
    <div class="container">
      <section class="content">
        <h2>Civic Innovators, this is your chance.</h2>
        <p>
          Help the Belgian government innovate in 4 public interest topics at
          Open Summer of Code 2020 in July.
        </p>
        <p>
          <Icon name="clock" />
          Applications are open until May 8, 2020.
        </p>
        <Button outline capitalize>Discover topics</Button>
      </section>

      <div class="image-container">

        <picture>
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 1380px) 100vw, 1380px"
            srcset="
            images/intro/intro_w0rohr_ar_1_1,c_fill,g_auto__c_scale,w_440.jpg
            440w,
            images/intro/intro_w0rohr_ar_1_1,c_fill,g_auto__c_scale,w_656.jpg
            656w,
            images/intro/intro_w0rohr_ar_1_1,c_fill,g_auto__c_scale,w_834.jpg
            834w,
            images/intro/intro_w0rohr_ar_1_1,c_fill,g_auto__c_scale,w_993.jpg
            993w" />
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 1971px) 70vw, 1380px"
            srcset="
            images/intro/intro_w0rohr_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg
            538w,
            images/intro/intro_w0rohr_ar_4_3,c_fill,g_auto__c_scale,w_721.jpg
            721w,
            images/intro/intro_w0rohr_ar_4_3,c_fill,g_auto__c_scale,w_881.jpg
            881w,
            images/intro/intro_w0rohr_ar_4_3,c_fill,g_auto__c_scale,w_1023.jpg
            1023w" />
          <img
            sizes="(max-width: 3450px) 40vw, 1380px"
            srcset=" images/intro/intro_w0rohr_c_scale,w_480.jpg 480w,
            images/intro/intro_w0rohr_c_scale,w_681.jpg 681w,
            images/intro/intro_w0rohr_c_scale,w_847.jpg 847w,
            images/intro/intro_w0rohr_c_scale,w_1001.jpg 1001w"
            alt="Focused students thinking of solutions" />
        </picture>

      </div>

    </div>
  </div>
</div>
