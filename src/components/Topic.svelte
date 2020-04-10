<script>
  export let icon;

  import { Icon } from './UI';
</script>

<article data-aos="fade-up">
  <div>
    <Icon name={icon} />
  </div>
  <slot />
</article>

<style>
  article {
    background-color: var(--color-white);
    padding: 4rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    font-weight: bold;
    border-radius: 0.5rem;
    transition: 0.3s all ease;
    line-height: 1.6;
  }

  article:hover,
  div:hover ~ article {
    box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    background-color: var(--color-light-blue);
    color: var(--color-white);
  }

  div {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    z-index: 10;
    left: calc(50% - 3rem);
    background-color: var(--color-light-blue);
    box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    transition: 0.2s all ease;
  }

  article:hover div,
  div:hover {
    color: var(--color-light-blue);
    background-color: var(--color-white);
  }

  @media screen and (max-width: 520px) {
    article {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>
