# Uncommon Precision Issue in Euclid's Algorithm GCD Implementation

This repository demonstrates a subtle precision issue that can arise in a JavaScript implementation of Euclid's algorithm for finding the greatest common divisor (GCD).  While the algorithm itself is robust, the use of `Math.abs(a - b)` in the recursive step can introduce inaccuracies for very large numbers. 

## The Bug
The `bug.js` file contains the faulty implementation. The issue is particularly pronounced when the difference between `a` and `b` is extremely small relative to their magnitudes. The floating-point limitations of JavaScript can lead to inaccuracies in the subtraction, resulting in incorrect GCD calculations.

## The Solution
The `bugSolution.js` file provides a corrected implementation.  It uses the modulo operator (%) instead of subtraction, mitigating the precision problem. The modulo operator is less susceptible to floating-point errors when dealing with integers.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js`.
3. Try running both files with large numbers as input and compare their output. You'll notice discrepancies with the original implementation for large numbers.