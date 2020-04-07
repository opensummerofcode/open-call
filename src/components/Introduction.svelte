<script>
  import { Icon, Button } from './UI';
  import okbeLogo from '../img/logo/okbe.svg';
  import bosaLogo from '../img/logo/bosa.svg';
  import prototypefundLogo from '../img/logo/prototypefund.svg';
</script>

<div id="intro" class="wrapper">
  <div class="background-wrapper">
    <div class="container">
      <div class="content-wrapper">
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
          <Button href="#topics" outline capitalize>Discover topics</Button>
        </section>
        <div class="logos">
          <div class="logo-container">
            {@html okbeLogo}
          </div>
          <div class="logo-container">
            {@html bosaLogo}
          </div>
          <div class="logo-container ppf-logo">
            {@html prototypefundLogo}
          </div>
        </div>
      </div>

      <div class="image-container">
        <img
          src="images/intro/intro.jpg"
          alt="Team of hardworking innovators" />
      </div>

    </div>
  </div>
</div>

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
    padding-top: var(--height-header);
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

  .logos {
    display: flex;
    width: 50rem;
    align-items: center;
    margin-top: 3rem;
  }

  .logo-container {
    width: 12rem;
    margin-right: 2rem;
  }

  .logo-container :global(svg) {
    max-width: 100%;
  }

  .logo-container :global(.fill-target) {
    transition: fill 0.3s ease;
  }

  /* to revert to initial svg fills, the "initial" value does not work
     using :not isn't *that* sketchy
  */
  :global(.logo-container:not(:hover) .fill-target) {
    fill: var(--color-white) !important;
  }

  .ppf-logo {
    transform: scale(0.9);
  }

  .image-container {
    width: 52rem;
    border-top-left-radius: 20rem;
    box-shadow: 0 30px 100px -20px rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }

  @media screen and (max-width: 1124px) {
    .image-container {
      width: 45rem;
    }
  }

  @media screen and (max-width: 980px) {
    .container {
      flex-direction: column;
      margin-top: 5rem;
      justify-content: flex-start;
    }
    .content {
      margin-bottom: 4rem;
      width: 48rem;
    }
    .background-wrapper::before {
      width: 100%;
    }
    .image-container {
      width: 48rem;
    }
  }

  @media screen and (max-width: 582px) {
    .content {
      margin-bottom: 4rem;
      width: 36rem;
    }
    .image-container {
      border-top-left-radius: 15rem;
      width: 36rem;
    }
    h2 {
      font-size: 3rem;
    }
    .container {
      margin-top: 3rem;
    }
    .background-wrapper::before {
      border-bottom-right-radius: 14rem;
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      margin-bottom: 4rem;
      width: 30rem;
    }
    .image-container {
      border-top-left-radius: 10rem;
      width: 30rem;
    }
  }

  @media screen and (max-width: 380px) {
    .content {
      margin-bottom: 4rem;
      width: 30rem;
    }
    .image-container {
      border-top-left-radius: 10rem;
      width: 30rem;
    }
  }

  .image-container img {
    width: 100%;
  }

  .content :global(.icon) {
    margin-right: 0.5rem;
  }
</style>
