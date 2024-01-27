/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {

    let array = sentence.split(" ");
    let arrayWordLength = [];
    

    array.forEach(function(eachWord){
        let wordLength = eachWord;
        arrayWordLength.push(wordLength.length);
    });

    //return arrayWordLength;
    let greaterLengthNum = arrayWordLength.reduce(function(accumulator, num) {
        if(num > accumulator) {
            return num;
        } else {
            return accumulator;
        }
    });

    //return greaterLengthNum;
    longWordArray = [];
    
    array.forEach(function(word) {
        if(word.length === greaterLengthNum) {
            longWordArray.push(word);
        }
    });

    return longWordArray[0];
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
