<script>
  import Topic from './Topic.svelte';
</script>

<div class="background-wrapper">
  <section id="topics" class="container">
    <h2>Systemic challenges, concrete solutions</h2>
    <h3>Together we prototype new ways of technical and social innovation.</h3>
    <div class="content-wrapper">
      <div class="topics">
        <Topic icon="citizen">
          Power to the citizen & tools for civic tech
        </Topic>
        <Topic icon="brain">AI for the many, not the few</Topic>
        <Topic icon="server">
          Linked data for better accessibility & usability of government data
        </Topic>
        <Topic icon="id-card">Next Generation Government identity</Topic>
      </div>
      <div class="content">
        <p>
          This call for projects supports both technical and non-technical civic
          innovators, makers, data journalists and other creative developers
          with the opportunity to convert project ideas from a concept (at
          least) into a prototype during
          <a href="https://summerofcode.be" target="blank">
            Open Summer of Code
          </a>
          .
        </p>
        <p>
          As project partner or coach, you will work together with a diverse
          team of talented students and government experts to make your project
          proposal come to life. This call accepts proposals that fit into one
          of the four categories.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  .background-wrapper {
    background: var(--color-off-white);
    padding: 5rem 0;
    margin-top: 10rem;
  }

  h3 {
    margin: 0;
    font-family: var(--font-copy);
    font-size: 2rem;
  }

  .content-wrapper {
    display: flex;
    margin-top: 6rem;
  }

  .content {
    flex: 1;
  }

  .topics {
    display: grid;
    flex: 1.2;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    margin-top: 2rem;
    margin-right: 3rem;
  }

  @media screen and (max-width: 1024px) {
    .content-wrapper {
      flex-direction: column-reverse;
      margin-top: 2rem;
    }
    .content {
      flex: auto;
    }
    .topics {
      flex: auto;
      margin-top: 4rem;
      margin-right: 0;
    }
    h2 {
      font-size: 3.4rem;
    }
  }

  @media screen and (max-width: 520px) {
    .topics {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }
</style>
