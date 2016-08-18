emcc -O3 fib.c -o fib.js -s EXPORT_NAME="'FibCModule'" -s MODULARIZE=1
