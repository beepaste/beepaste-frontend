const injectScript = (appId) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.heap = window.heap || [], heap.load = function (e, t) {
      window.heap.appid = e, window.heap.config = t = t || {};
      let r = t.forceSSL || 'https:' === document.location.protocol,
        a = document.createElement('script');
      a.type = 'text/javascript', a.async = !0, a.src = `${r ? "https:" : "http:"  }//cdn.heapanalytics.com/js/heap-${  e  }.js`;
      let n = document.getElementsByTagName('script')[0];
      n.parentNode.insertBefore(a, n);
      for (let o = function o(e) {
          return function () {
          heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
        }, p = ['addEventProperties', 'addUserProperties', 'clearEventProperties', 'identify', 'removeEventProperty', 'setEventProperties', 'track', 'unsetEventProperty'], c = 0; c < p.length; c++) {
        heap[p[c]] = o(p[c]);
      }
    };
  heap.load(appId);
};
export default injectScript;

