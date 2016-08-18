
fibC = Module.cwrap('fib', 'number', ['number']);
fib = function(n) {
  if (n === 1 || n === 0) return 1;
  else return fib(n - 1) + fib(n - 2);
}
var start = new Date().getTime();
fibC(45);
var end = new Date().getTime();
var time = end - start;
console.log("C time: ", time);

start = new Date().getTime();
fib(45);
end = new Date().getTime();
time = end - start;
console.log("JS time: ", time)
