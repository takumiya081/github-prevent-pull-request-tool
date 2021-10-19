// https://github.com/OctoLinker/injection/blob/master/index.js
// spackがなぜかこのdefault importできない。。。
export const gitHubInjection = (cb) => {
  if (!cb) {
    throw new Error('Missing argument callback');
  }

  if (typeof cb !== 'function') {
    throw new TypeError('Callback is not a function');
  }

  document.addEventListener('pjax:end', cb);
  cb();
};
