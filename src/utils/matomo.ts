
/* user data tracking: */
export const initMatomo = () => {
    const _paq = (window._paq = window._paq || []);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      const u = '//ewa.agency/matomo/';
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '3']);
      const d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = u + 'matomo.js';
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      } else {
        d.head.appendChild(g); // Fallback in case there is no script tag
      }
    })();
  };
  