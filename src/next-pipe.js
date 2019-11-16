(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var RETURN_VALUE = function(inValue) { return inValue; };
  var DEFAULT_PIPE = { fn: RETURN_VALUE, args: [] };

  nx.pipe = function(inValue, inItems) {
    var items = inItems || DEFAULT_PIPE;
    return items.reduce((item1, item2) => {
      return item2.fn(item1, item2.args);
    }, inValue);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pipe;
  }
})();
