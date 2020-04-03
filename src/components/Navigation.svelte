<script>
  import { onMount } from 'svelte';
  import { Button } from './UI';

  let header;
  let scrollY;

  let fixed;
  let initialHeight;

  onMount(() => {
    initialHeight = getComputedStyle(document.documentElement).getPropertyValue(
      '--height-header'
    );
  });

  $: console.log(initialHeight);

  $: if (header && scrollY > 0) {
    fixed = true;
  } else fixed = false;
</script>

<svelte:window bind:scrollY />

<header bind:this={header} class:fixed>
  <nav>
    <ul>
      <li class="title">
        <h1>
          <a href="#intro">Open Call #osoc20</a>
        </h1>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#topics">Topics</a>
      </li>
      <li>
        <a href="#timeline">Timeline</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
    </ul>
    <ul>
      <li>
        <Button capitalize>Submit proposal</Button>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    height: var(--height-header);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: transparent;
    --nav-color: var(--color-white);
    color: var(--nav-color);
    transition: 0.3s all ease;
  }

  .fixed {
    position: fixed;
    --nav-color: var(--color-dark-blue);
    background-color: var(--color-white);
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8rem;
  }

  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
    margin-left: 3.6rem;
    font-size: 1.8rem;
    position: relative;
  }

  li.title {
    justify-self: flex-start;
    margin: 0;
    letter-spacing: 0.2rem;
    margin-right: 3rem;
  }

  a {
    color: var(--nav-color);
  }

  a,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -0.4rem;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--nav-color);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin: 0;
    font-weight: bold;
  }
</style>
