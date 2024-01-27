/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowels = ['a', 'e', 'i','o','u'];
    let lastVowelRemoved = [];

    for(let j = word.length - 1; j >= 0; j--) {
        if(vowels.includes(word[j])) {
            let beforevowel = word.slice(0, j)
            let afterVowel = word.slice(j+1)

            lastVowelRemoved.push(beforevowel+afterVowel);
            break;
        }      
    }

    return lastVowelRemoved;
};

let hipsterfy = function(sentence) {
    let arraySentence = sentence.split(" ");

    let newSentence = arraySentence.map(function(word) {
        return removeLastVowel(word).join(' ');
    });

    return newSentence.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
