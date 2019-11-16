# next-pipe
> Pipe for next.

## installation
```bash
npm install -S afeiship/next-pipe
```

## usage
```js
import 'next-pipe';

//DOCS here!
const pipe1 = { fn: addMore, args: [111, 999] };
const pipe2 = { fn: addZero};
const res = nx.pipe('aaa', [pipe1, pipe2]);

//res: 0111aaa9990
```
