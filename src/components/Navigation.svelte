<script>
  import { onMount } from 'svelte';
  import { Button, NavLink, Hamburger } from './UI';

  let header;
  let scrollY;

  let fixed;
  let mobileNavShown = false;
  let small = true;

  let initialHeight;

  onMount(() => {
    initialHeight = header.offsetHeight;
  });

  const toggleNav = () => (mobileNavShown = !mobileNavShown);

  $: if (header && scrollY > 0) {
    fixed = true;
  } else fixed = false;

  $: if (header && scrollY > initialHeight / 2) {
    small = true;
  } else small = false;
</script>

<svelte:window bind:scrollY />

<header bind:this={header} class:fixed class:small>
  <nav class:open={mobileNavShown}>
    <h1>
      <NavLink href="#intro">Open Call #osoc20</NavLink>
    </h1>
    <ul>
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
        <Button capitalize>Submit proposal</Button>
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
    box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
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
</style>
