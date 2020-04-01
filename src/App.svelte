<script>
  import smoothscroll from 'smoothscroll-polyfill';

  import Navigation from './Navigation.svelte';
  import Introduction from './Introduction.svelte';

  import addAnalytics from './analytics';

  smoothscroll.polyfill();
  if (process.env.production) addAnalytics();
</script>

<style>

</style>

<div>
  <Navigation />
  <main id="main-content">
    <Introduction />
    <p>Some more content</p>
  </main>
</div>
