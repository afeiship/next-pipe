const nx = require('next-js-core2');
require('../src/next-pipe');
var addMore = require('./pipes/add-more');
var addZero = require('./pipes/add-zero')

describe('api.basic test', () => {
  test('nx.pipe single pipe', function() {
    var pipe1 = { fn: addMore, args: [111, 999] };
    var res = nx.pipe('aaa', [pipe1]);
    expect(res).toBe('111aaa999');
  });

  test('nx.pipe multiple pipe', function() {
    var pipe1 = { fn: addMore, args: [111, 999] };
    var pipe2 = { fn: addZero};
    var res = nx.pipe('aaa', [pipe1, pipe2]);
    expect(res).toBe('0111aaa9990');
  });
});
