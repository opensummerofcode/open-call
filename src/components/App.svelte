<script>
  import smoothscroll from 'smoothscroll-polyfill';

  import Navigation from './Navigation.svelte';
  import Introduction from './Introduction.svelte';
  import About from './About.svelte';
  import Topics from './Topics.svelte';
  import FAQ from './FAQ.svelte';

  import navigable from '../actions/navigable';

  import addAnalytics from '../analytics';

  smoothscroll.polyfill();
  if (process.env.production) addAnalytics();
</script>

<div use:navigable>
  <Navigation />
  <!-- id is to make navigation skippable by screen readers -->
  <main id="main-content">
    <Introduction />
    <About />
    <Topics />
    <FAQ />
  </main>
</div>

<style>

</style>
