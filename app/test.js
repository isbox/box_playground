setImmediate(() => {
  console.log('setImmediate1');
  setTimeout(console.log.bind(null, 'setTimeout1'));
  setImmediate(console.log.bind(null, 'setImmediate2'));
  let i = 0;
  while(i < 10000) {
    i++;
  }
  setTimeout(console.log.bind(null, 'setTimeout2'));
});

Promise.resolve().then(res => {
  console.log('promise1');
  process.nextTick(console.log.bind(this, 'tick1'));
});

setTimeout(console.log.bind(null, 'setTimeouut3'));

process.nextTick(console.log.bind(this, 'tick2'));

console.log('normal');
