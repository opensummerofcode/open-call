<script>
  export let name;

  import Icon from 'fa-svelte';
  import {
    faClock,
    faStreetView,
    faBrain,
    faServer,
    faIdCard,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

  const icons = {
    clock: faClock,
    citizen: faStreetView,
    brain: faBrain,
    server: faServer,
    'id-card': faIdCard,
    twitter: faTwitter,
    linkedIn: faLinkedinIn,
    mail: faEnvelope
  };

  let icon = icons[name];
</script>

<i class="icon">
  <Icon {icon} />
</i>

<style>
  .icon {
    display: inline-flex;
    align-items: center;
    line-height: 1.6;
    height: 100%;
  }
</style>
