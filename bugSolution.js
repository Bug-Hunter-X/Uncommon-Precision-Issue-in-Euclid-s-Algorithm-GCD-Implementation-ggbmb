function myFunction(a, b) {
  if (b === 0) {
    return a;
  }
  return myFunction(b, a % b);
}

console.log(myFunction(10, 6)); // Output: 2
console.log(myFunction(48, 18)); // Output: 6
console.log(myFunction(0, 10)); // Output: 10
console.log(myFunction(10, 0)); // Output: 10
console.log(myFunction(Number.MAX_SAFE_INTEGER, 10)); //Output: 2