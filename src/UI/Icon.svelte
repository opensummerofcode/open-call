<script>
  export let name;

  import Icon from 'fa-svelte';
  import { faClock } from '@fortawesome/free-solid-svg-icons';

  const icons = { clock: faClock };

  let icon = icons[name];
</script>

<style>
  .icon {
    display: inline-flex;
    vertical-align: middle;
    height: 100%;
  }
</style>

<i class="icon">
  <Icon {icon} />
</i>
