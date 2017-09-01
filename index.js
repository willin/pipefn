module.exports = function pipe(fn, ...args) {
  return function curry(_) {
    if (typeof fn === 'function') {
      return fn.apply(_, ...args);
    }
    return _;
  };
};
