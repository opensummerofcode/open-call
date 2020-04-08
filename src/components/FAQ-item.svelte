<script>
  export let id;

  import { slide } from 'svelte/transition';

  let isOpen = false;

  const open = function() {
    //remove focus style instanty
    this.blur();
    isOpen = !isOpen;
  };
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
    padding-left: 0.8rem;
    cursor: pointer;
    text-align: left;
    outline: 0;
    display: inline-block;
  }

  button:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -0.4rem;
    content: '';
    display: block;
    height: 0.2rem;
    left: 50%;
    position: absolute;
    background: var(--color-light-blue);
    transition: width 0.2s ease 0s, left 0.2s ease 0s;
    width: 0;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0;
  }

  .caret {
    width: 0;
    height: 0;
    display: inline-block;
    border: 0.6rem solid transparent;
    position: absolute;
    top: 0.3rem;
    left: -0.6rem;
    border-left-color: var(--color-dark-purple);
    transition: transform 0.2s ease-in-out;
  }
  .caret.open {
    top: 0.5rem;
    transform: rotate(90deg);
  }

  dd {
    margin-bottom: 1.8rem;
  }
</style>
