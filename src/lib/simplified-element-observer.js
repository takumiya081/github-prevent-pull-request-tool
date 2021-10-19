// https://github.com/N1ck/gifs-for-github/blob/master/src/lib/simplified-element-observer.js
/* eslint-disable no-param-reassign */
export function observe(element, listener, options) {
  options = {...options, childList: true};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element) {
    return undefined;
  }

  // Run on updates
  const observer = new MutationObserver(listener);
  observer.observe(element, options);

  // Run the first time
  listener.call(observer, []);

  return observer;
}
