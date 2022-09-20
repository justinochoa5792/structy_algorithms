// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  s1 = s1.split("");
  s2 = s2.split("");
  return s1.filter((item) => s2.includes(item)) ? true : false;
};

module.exports = {
  anagrams,
};
