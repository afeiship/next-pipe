(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.pipe = function () {
    var fns = nx.slice(arguments);
    if (fns.length === 0) return nx.stubValue;
    if (fns.length === 1) return fns[0];

    return fns.reduceRight(function (fn1, fn2) {
      return function () {
        return fn1(fn2.apply(null, arguments));
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pipe;
  }
})();
