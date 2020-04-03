<script>
  import smoothscroll from 'smoothscroll-polyfill';

  import Navigation from './Navigation.svelte';
  import Introduction from './Introduction.svelte';
  import About from './About.svelte';
  import Topics from './Topics.svelte';

  import addAnalytics from '../analytics';

  smoothscroll.polyfill();
  if (process.env.production) addAnalytics();
</script>

<style>

</style>

<div>
  <Navigation />
  <!-- id is to make navigation skippable by screen readers -->
  <main id="main-content">
    <Introduction />
    <About />
    <Topics />
  </main>
</div>
