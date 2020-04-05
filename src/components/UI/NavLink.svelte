<script>
  export let href;
  export let isInDrawer = true;

  import { onMount, onDestroy } from 'svelte';
  import { currentSegment } from '../../stores/nav';

  let scrollY;

  let link;
  let target;
  let targetIsInView = false;
  onMount(() => {
    target = document.querySelector(link.getAttribute('href'));
  });

  let segment;
  const unsubscribe = currentSegment.subscribe(value => {
    segment = value;
  });
  onDestroy(unsubscribe);

  $: if (
    target &&
    link &&
    target.offsetTop <= scrollY + 66 &&
    target.offsetTop + target.offsetHeight > scrollY + 66
  ) {
    currentSegment.set(link.getAttribute('href'));
    targetIsInView = true;
  } else targetIsInView = false;
</script>

<svelte:window bind:scrollY />

<a
  {href}
  bind:this={link}
  class:mobile-nav-link={isInDrawer}
  class:active={isInDrawer && segment === href && targetIsInView}>
  <slot />
</a>

<style>
  a {
    color: var(--nav-color);
    /* this is fine since focus styles are applied for tab indexing */
    outline: 0;
    transition: color 0.3s ease;
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

  a.active:after,
  a:focus:after,
  a:hover:after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 1024px) {
    .mobile-nav-link:after {
      display: none;
    }

    .mobile-nav-link.active,
    .mobile-nav-link:focus,
    .mobile-nav-link:hover {
      color: var(--color-light-blue);
    }
  }
</style>
