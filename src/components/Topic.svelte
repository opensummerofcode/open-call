<script>
  export let icon;

  import { Icon } from './UI';
</script>

<article>
  <div>
    <Icon name={icon} />
  </div>
  <slot />
</article>

<style>
  article {
    background-color: var(--color-white);
    padding: 0 4rem;
    height: 14rem;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    position: relative;
    font-weight: bold;
    border-radius: 0.5rem;
    transition: 0.3s all ease;
  }

  article:hover,
  div:hover ~ article {
    box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    margin-top: -0.4rem;
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
    color: #fff;
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
</style>
