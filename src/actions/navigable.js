import { currentSegment, isMobileNavShown } from '../stores/nav';

export default (node) => {
  let location;

  const navigate = function (e) {
    e.preventDefault();
    location = this.getAttribute('href');
    currentSegment.set(location);
    isMobileNavShown.set(false);
    if (location === '#intro') {
      history.replaceState(null, null, '/');
      return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    history.replaceState(null, location.substring(1), location);
    const target = document.querySelector(location);
    if (!target) return;

    const height = getComputedStyle(document.documentElement).getPropertyValue(
      '--height-header-scroll'
    );
    const offset = parseFloat(height.replace('rem', '')) * 10;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    return window.scrollTo({ top: y, behavior: 'smooth' });
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
