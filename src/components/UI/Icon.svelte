<script>
  export let name;

  import Icon from 'fa-svelte';
  import {
    faClock,
    faStreetView,
    faBrain,
    faServer,
    faIdCard
  } from '@fortawesome/free-solid-svg-icons';

  const icons = {
    clock: faClock,
    citizen: faStreetView,
    brain: faBrain,
    server: faServer,
    'id-card': faIdCard
  };

  let icon = icons[name];
</script>

<style>
  .icon {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
</style>

<i class="icon">
  <Icon {icon} />
</i>
