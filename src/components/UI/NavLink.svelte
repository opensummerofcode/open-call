<script>
  export let href;

  import { segment } from '../../stores/nav';
</script>

<a {href} class:active={$segment === href}>
  <slot />
</a>

<style>
  a {
    color: var(--nav-color);
    /* this is fine since focus styles are applied for tab indexing */
    outline: 0;
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
</style>
