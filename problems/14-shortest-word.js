/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  let array = sentence.split(" ");
  let arrayWordLength = [];
  

  array.forEach(function(eachWord){
      let wordLength = eachWord;
      arrayWordLength.push(wordLength.length);
  });

  //return arrayWordLength;
  let shortestLengthNum = arrayWordLength.reduce(function(accumulator, num) {
      if(num < accumulator) {
          return num;
      } else {
          return accumulator;
      }
  });

  //return greaterLengthNum;
  shortWordArray = [];
  
  array.forEach(function(word) {
      if(word.length === shortestLengthNum) {
          shortWordArray.push(word);
      }
  });

  if(shortWordArray.length > 1) {
    return shortWordArray[shortWordArray.length - 1];
  } else {
    return shortWordArray[0];
  }
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
