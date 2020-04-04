import { segment, isMobileNavShown } from '../stores/nav';

export default (node) => {
  let location;

  const navigate = function (e) {
    e.preventDefault();
    location = this.getAttribute('href');
    segment.set(location);
    isMobileNavShown.set(false);
    if (location === '#intro') {
      history.replaceState(null, null, '/');
      return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    history.replaceState(null, location.substring(1), location);
    const target = document.querySelector(location);
    if (!target) return;
    return target.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [];
  node.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', navigate);
    links.push(link);
  });

  return {
    destroy() {
      links.forEach((link) => link.removeEventListener('click', navigate));
    }
  };
};
