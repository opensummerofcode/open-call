<script>
  import { Icon, Button } from './UI';
</script>

<style>
  .wrapper {
    height: calc(100vh - var(--height-nav));
    /* height: 100vh;*/
    min-height: 100rem;
    width: 100%;
  }

  .background-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--color-white);
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
          <img
            sizes="(max-width: 931px) 100vw, 931px"
            srcset="/images/intro/48383268586_ebff6f48a7_k_2_ippfgz_c_scale,w_440.jpg
            440w,
            /images/intro/48383268586_ebff6f48a7_k_2_ippfgz_c_scale,w_631.jpg
            631w,
            /images/intro/48383268586_ebff6f48a7_k_2_ippfgz_c_scale,w_779.jpg
            779w,
            /images/intro/48383268586_ebff6f48a7_k_2_ippfgz_c_scale,w_931.jpg
            931w"
            src="/images/intro/48383268586_ebff6f48a7_k_2_ippfgz_c_scale,w_931.jpg"
            alt="Team picture at Open Summer of Code" />
        </picture>
      </div>

    </div>
  </div>
</div>
