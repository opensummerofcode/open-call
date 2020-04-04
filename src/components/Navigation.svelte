<script>
  import { onMount } from 'svelte';
  import { Button, NavLink, Hamburger } from './UI';

  let mobileNavShown = false;

  /* any transition or animation to do with sizing will trigger on page load and browser
   resize, we don't want that */
  let domIsAnimationReady = false;
  let resizeTimer;
  const preventAnimation = () => {
    domIsAnimationReady = false;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      domIsAnimationReady = true;
    }, 400);
  };

  let header;
  let initialHeight;
  onMount(() => {
    initialHeight = header.offsetHeight;
    setTimeout(() => (domIsAnimationReady = true), 550);
  });

  const toggleNav = () => (mobileNavShown = !mobileNavShown);

  let scrollY;
  let fixed;
  let small = true;
  $: if (header && scrollY > 0) {
    fixed = true;
  } else fixed = false;

  $: if (header && scrollY > initialHeight / 2) {
    small = true;
  } else small = false;
</script>

<svelte:window bind:scrollY on:resize={preventAnimation} />

<header bind:this={header} class:fixed class:small>
  <nav class:open={mobileNavShown}>
    <h1>
      <NavLink href="#intro">Open Call #osoc20</NavLink>
    </h1>
    <ul class:transitionable={domIsAnimationReady}>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
      <li>
        <NavLink href="#topics">Topics</NavLink>
      </li>
      <li>
        <NavLink href="#timeline">Timeline</NavLink>
      </li>
      <li>
        <NavLink href="#faq">FAQ</NavLink>
      </li>
      <li class="right">
        <Button
          href="https://osoc.typeform.com/to/tGnsYT"
          target="blank"
          capitalize>
          Submit proposal
        </Button>
      </li>
    </ul>
    <Hamburger isOpen={mobileNavShown} on:click={toggleNav} />
  </nav>
</header>

<style>
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: var(--height-header);
    /* max-height is transitionable whereas height is not */
    max-height: var(--height-header);
    z-index: 100;
    color: var(--nav-color);
    background: transparent;
    overflow: hidden;
    transition: 0.3s all ease;
    --nav-color: var(--color-white);
  }

  .fixed {
    --nav-color: var(--color-dark-blue);
    background-color: var(--color-white);
    box-shadow: 0.4rem 0 2rem -0.5rem rgba(0, 0, 0, 0.2);
  }

  .small {
    max-height: var(--height-header-scroll);
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5rem;
  }

  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    list-style-type: none;
    margin-left: 3rem;
    font-size: 1.8rem;
    position: relative;
  }

  li.right {
    margin-left: auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.2rem;
    margin-right: 1rem;
    position: relative;
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    ul {
      position: fixed;
      top: 0;
      right: 0;
      width: 30rem;
      height: 100vh;
      padding: 0 3rem;
      padding-top: 8rem;
      background: var(--color-white);
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 110;
      --nav-color: var(--color-dark-blue);

      /* stop text flickering in chromium browsers */
      -webkit-font-smoothing: antialiased;

      transform-origin: 0% 0%;
      transform: translate(100%, 0);
    }

    ul.transitionable {
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    .open ul {
      transform: scale(1, 1);
      opacity: 1;
    }

    li {
      margin-left: 0;
      margin-bottom: 3rem;
    }

    li.right {
      margin-left: 0;
    }
  }
</style>
