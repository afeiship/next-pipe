/*!
 * name: @jswork/next-pipe
 * description: Pipe for next.
 * homepage: https://github.com/afeiship/next-pipe
 * version: 1.0.0
 * date: 2020-11-22 19:57:06
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_PIPE = { fn: nx.stubValue, args: [] };

  nx.pipe = function (inValue, inItems) {
    var has = inItems && inItems.length > 0;
    var items = has ? inItems : [DEFAULT_PIPE];
    return items.reduce(function (item1, item2) {
      return item2.fn(item1, item2.args);
    }, inValue);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pipe;
  }
})();
