<script>
  import { onMount } from 'svelte';
  import smoothscroll from 'smoothscroll-polyfill';

  import 'normalize.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  import Navigation from './Navigation.svelte';
  import Introduction from './Introduction.svelte';
  import About from './About.svelte';
  import Topics from './Topics.svelte';
  import Timeline from './Timeline.svelte';
  import FAQ from './FAQ.svelte';
  import Footer from './Footer.svelte';

  import navigable from '../actions/navigable';

  import addAnalytics from '../analytics';

  onMount(() => {
    AOS.init();
    if (process.env.production) addAnalytics();
  });

  smoothscroll.polyfill();
</script>

<div use:navigable>
  <Navigation />
  <!-- id is to make navigation skippable by screen readers -->
  <main id="main-content">
    <Introduction />
    <About />
    <Topics />
    <Timeline />
    <FAQ />
  </main>
  <Footer />
</div>

<style>

</style>
