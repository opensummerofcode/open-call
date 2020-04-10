<script>
  const scrollable = container => {
    container.querySelectorAll('article').forEach((timelineItem, i) => {
      timelineItem.setAttribute(
        'data-aos',
        i % 2 === 0 ? 'fade-left' : 'fade-right'
      );
    });
  };
</script>

<section id="timeline" class="container site-section">
  <h2>Timeline</h2>
  <div class="timeline" use:scrollable>
    <article>
      <h3>
        <time datetime="2020-04-14">April 14</time>
      </h3>
      <p>Launch open call for projects</p>
    </article>
    <article>
      <h3>
        <time datetime="2020-04-28">April 28</time>
      </h3>
      <p>
        <strong>
          <a href="">Virtual meetup</a>
          to share information about the topics and provide feedback
        </strong>
      </p>
    </article>
    <article>
      <h3>
        <time datetime="2020-05-08">May 8</time>
      </h3>
      <p>Applications close</p>
    </article>
    <article>
      <h3>
        <time datetime="2020-05-31">End of May</time>
      </h3>
      <p>Public communication about the project selection</p>
    </article>
    <article>
      <h3>
        <time datetime="2020-05-31">End of May</time>
      </h3>
      <p>
        Matchmaking between students, coaches, project partners & government
        experts
      </p>
    </article>
    <article>
      <h3>
        <time datetime="2020-06-1">June</time>
      </h3>
      <p>
        Fine tuning the project briefing (data gathering, documentation, ...)
      </p>
    </article>
    <article>
      <h3>
        <time datetime="2020-07-6">July 6</time>
      </h3>
      <p>Kickoff Open Summer of Code 2020</p>
    </article>
    <article>
      <h3>
        <time datetime="2020-07-31">July 30</time>
      </h3>
      <p>
        <!--TODO: Add demo day link -->
        <strong>Demo day:</strong>
        presentation of all prototypes to the general public!
      </p>
    </article>
  </div>
</section>

<style>
  .timeline {
    min-width: 30rem;
    max-width: 50rem;
    margin: auto;
  }

  article {
    line-height: 1.7;
    border-top: 0.3rem solid;
    border-image: linear-gradient(
      to right,
      var(--color-red) 0%,
      var(--color-light-blue) 100%
    );
    border-image-slice: 1;
    border-width: 0.3rem;
    margin: 0;
    padding: 4rem;
    counter-increment: section;
    position: relative;
    color: var(--color-dark-blue);
  }

  article:before {
    content: counter(section);
    position: absolute;
    border-radius: 50%;
    padding: 1rem;
    height: 4rem;
    width: 4rem;
    background-color: var(--color-light-blue);
    box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    text-align: center;
    color: var(--color-white);
    font-size: 1.6rem;
    line-height: 2rem;
  }

  article:nth-child(odd) {
    border-right: 0.3rem solid;
    padding-left: 0;
  }

  article:nth-child(odd):before {
    left: 100%;
    margin-left: -2rem;
  }

  article:nth-child(even) {
    border-left: 0.3rem solid;
    padding-right: 0;
  }
  article:nth-child(even):before {
    right: 100%;
    margin-right: -2rem;
  }
  article:first-child {
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  article:last-child {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.8rem;
    margin: 0 0 1rem;
  }
</style>
