<script>
  export let isOpen = false;
  export let isAtTop = true;
</script>

<button
  on:click
  class="hamburger"
  class:is-at-top={isAtTop}
  class:open={isOpen}>
  <span />
</button>

<style>
  button {
    display: none;
    z-index: 120;
    border: 0;
    cursor: pointer;
    background: transparent;
    outline-offset: 0.5rem;
    outline-color: var(--color-light-blue);
    height: 4rem;
    user-select: none;
    margin-left: auto;
  }

  span {
    background: var(--color-dark-blue);
    display: block;
    height: 0.3rem;
    position: relative;
    transition: background 200ms ease-out;
    width: 3rem;
  }

  span:before,
  span:after {
    background: var(--color-dark-blue);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 200ms ease-out;
    width: 100%;
  }

  span:before {
    top: 0.8rem;
  }
  span:after {
    top: -0.8rem;
  }

  .open span {
    background: transparent;
  }

  .open span:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .open span:after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (max-width: 1024px) {
    button {
      display: block;
    }
  }

  @media screen and (max-width: 980px) {
    .is-at-top span,
    .is-at-top span:before,
    .is-at-top span:after {
      background: var(--color-white);
    }

    .open span:before,
    .open span:after {
      background: var(--color-dark-blue);
    }
  }
</style>
