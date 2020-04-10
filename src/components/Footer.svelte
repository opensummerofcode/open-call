<script>
  import { Icon } from './UI';
  import okbeLogo from '../img/logo/okbe.svg';
  import bosa from '../img/logo/bosa.svg';
  import prototypefund from '../img/logo/prototypefund.svg';
</script>

<footer>
  <div class="footer-wrapper">
    <div class="organised-by">
      <h2>Organised By</h2>
      <div class="wrapper logo okbe">
        <a href="https://openknowledge.be" target="_blank">
          {@html okbeLogo}
        </a>
      </div>
    </div>
    <div class="supported-by">
      <h2>With the support of</h2>
      <div class="wrapper logos">
        <div class="logo">
          <a href="https://bosa.belgium.be" target="_blank">
            {@html bosa}
          </a>
        </div>
        <div class="logo ppf">
          <a href="https://prototypefund.de" target="_blank">
            {@html prototypefund}
          </a>
        </div>
      </div>
    </div>
    <div class="socials">
      <h2>Stay in touch</h2>
      <div class="wrapper icons">
        <a href="https://twitter.com/openknwledgebe" target="_blank">
          <Icon name="twitter" />
        </a>
        <a href="https://www.linkedin.com/company/4872375/" target="_blank">
          <Icon name="linkedIn" />
        </a>
        <a href="mailto:opencall@openknowledge.be">
          <Icon name="mail" />
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    box-shadow: 0 0.1rem 0.6rem 0.3rem rgba(81, 81, 81, 0.2);
  }

  .footer-wrapper {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20rem;
  }

  .footer-wrapper > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logos .logo:first-child {
    margin-right: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
    flex: 0.2;
  }

  .wrapper {
    flex: 0.75;
  }

  .icons {
    display: flex;
    flex-direction: row;
    font-size: 3rem;
  }

  .icons a {
    margin-left: 2rem;
    color: var(--color-light-blue);
    display: inline-block;
    position: relative;
    outline: 0;
  }

  .icons a:first-child {
    margin-left: 0;
  }

  .icons a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -0.4rem;
    content: '';
    display: block;
    height: 0.2rem;
    left: 50%;
    position: absolute;
    background: var(--color-light-blue);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  .icons a:focus:after,
  .icons a:hover:after {
    width: 100%;
    left: 0;
  }

  .logo {
    width: 9rem;
  }

  .logo.okbe {
    width: 11rem;
  }
  .logo.ppf {
    width: 8rem;
  }

  @media screen and (max-width: 600px) {
    .footer-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      max-width: 120rem;
      padding-bottom: 0;
    }

    .footer-wrapper > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.6rem;
    }
  }
</style>
