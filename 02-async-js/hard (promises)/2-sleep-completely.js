/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const startTime = Date.now();

  while (Date.now() - startTime <= seconds) {}
}

console.log("Making the thread busy for 10 seconds");
sleep(10000);
console.log("10 Second wait over");
