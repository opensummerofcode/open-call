<style>
  header {
    height: calc(100vh - var(--height-nav));
    /* height: 100vh;*/
    min-height: 110rem;
    width: 100%;
  }

  .wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: var(--color-white);
    padding-top: var(--height-nav);
    z-index: 10;
  }

  .wrapper::before {
    width: 70%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-dark-blue);
    height: 100%;
    content: '';
    z-index: -1;
    border-bottom-right-radius: 25rem;
  }

  h2 {
    margin-top: 0;
  }
</style>

<header>
  <div class="wrapper">
    <section class="container">
      <h2>Civic Innovators, this is your chance.</h2>
    </section>
  </div>
</header>
