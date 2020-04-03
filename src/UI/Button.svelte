<script>
  export let type = null;
  export let href = null;
  export let primary = false;
  export let capitalize = false;
  export let outline = false;
</script>

<style>
  button {
    color: var(--color-white);
    border: 0;
    padding: 1.2rem 1.6rem;
    border-radius: 0.4rem;
    font-weight: bold;
    background-color: var(--color-light-blue);
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 300ms;
    font-size: 1.6rem;
    text-align: center;
  }

  .primary {
    background-color: var(--color-red);
  }

  .capitalize {
    text-transform: uppercase;
  }

  .outline {
    background-color: transparent;
    border: 2px solid var(--color-white);
  }

  .outline:hover {
    background-color: var(--color-white);
    color: var(--color-dark-blue);
  }
</style>

{#if href}
  <a {href} class:outline class:primary class:capitalize>
    <slot />
  </a>
{:else}
  <button class:outline class:primary class:capitalize {type}>
    <slot />
  </button>
{/if}
