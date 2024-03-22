#!/usr/bin/node

/*
  Print a square with the character #
  The size of the square must be provided as the first argument.
*/

if (process.argv.length <= 2) {
    console.error("Missing argument"); // Use console.error for clearer output
    console.error("Usage: node 1-print_square.js <size>"); // Use node to run
    console.error("Example: node 1-print_square.js 8");
    process.exit(1);
  }
  
  const size = parseInt(process.argv[2], 10); // Use const for variables that don't change
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      process.stdout.write("#");
    }
    console.log(); // Use console.log for line breaks
  }
