<script>
  import smoothscroll from 'smoothscroll-polyfill';

  import Navigation from './Navigation.svelte';

  import addAnalytics from './analytics';

  smoothscroll.polyfill();
  if (process.env.production) addAnalytics();
</script>

<style>

</style>

<div>
  <Navigation />
  <main>
    <h1>Hello world</h1>
    <p>Greetings</p>
  </main>
</div>
