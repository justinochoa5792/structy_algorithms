// isPrime
// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

const isPrime = (n) => {
  let prime = true;
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false;
    }
  }
  return prime;
};

module.exports = {
  isPrime,
};
