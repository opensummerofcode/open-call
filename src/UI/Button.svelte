<script>
  export let type = null;
  export let href = null;
  export let primary = false;
  export let capitalize = false;
</script>

<style>
  button {
    color: var(--color-white);
    border: 0;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    font-weight: bold;
  }

  .primary {
    background-color: var(--color-light-blue);
  }

  .capitalize {
    text-transform: uppercase;
  }
</style>

{#if href}
  <a {href}>
    <slot />
  </a>
{:else}
  <button class:primary class:capitalize {type}>
    <slot />
  </button>
{/if}
