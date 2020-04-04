<script>
  export let isOpen = false;
</script>

<button on:click class={isOpen ? 'open' : ''}>
  <span />
</button>

<style>
  button {
    display: none;
    z-index: 110;
    border: 0;
    cursor: pointer;
    background: transparent;
    outline-offset: 0.5rem;
    height: 4rem;
    user-select: none;
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
</style>
