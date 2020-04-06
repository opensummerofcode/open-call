import {
  isMobileNavShown,
  currentSegment,
  shouldObserveScroll
} from '../stores/nav';

export default (node) => {
  const navigate = function (e) {
    e.preventDefault();

    // nav-links should have their focus styles removed after click instantly
    this.blur();

    const href = this.getAttribute('href');
    currentSegment.set(href);
    isMobileNavShown.set(false);
    shouldObserveScroll.set(false);
    setTimeout(() => {
      shouldObserveScroll.set(true);
    }, 600);

    if (href === '#intro') {
      history.replaceState(null, null, '/');
      return window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    history.replaceState(null, href.substring(1), href);
    const target = document.querySelector(href);
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
