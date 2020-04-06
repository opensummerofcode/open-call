<script>
  export let id;

  import { slide } from 'svelte/transition';

  let isOpen = false;

  const open = () => (isOpen = !isOpen);
</script>

<dt>
  <button
    on:click={open}
    aria-expanded={isOpen}
    aria-controls={`faq${id}_desc`}>
    <span class="caret" class:open={isOpen} />
    <slot name="question" />
  </button>
</dt>
<dd>
  <div id={`faq${id}_desc`}>
    {#if isOpen}
      <p transition:slide={{ duration: 300 }}>
        <slot name="answer" />
      </p>
    {/if}
  </div>
</dd>

<style>
  button {
    position: relative;
    border: 0;
    background: transparent;
    margin-left: 0.8rem;
    cursor: pointer;
  }

  .caret {
    width: 0;
    height: 0;
    display: inline-block;
    border: 0.6rem solid transparent;
    position: absolute;
    top: calc(50% - 0.6rem);
    left: -0.6rem;
    border-left-color: var(--color-dark-purple);
    transition: transform 0.2s ease-in-out;
  }
  .caret.open {
    top: calc(50% - 0.3rem);
    transform: rotate(90deg);
  }

  dd {
    margin-bottom: 1.8rem;
  }
</style>
