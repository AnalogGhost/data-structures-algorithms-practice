// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1 - Iterative (Hashmap)
// function vowels(str) {
//     let count = 0
//     const validVowels = { a:true, e:true, i:true, o:true, u:true }
//     for (char of str.toLowerCase()) {
//         if (validVowels[char]) {
//             count++
//         }
//     }

//     return count
// }

// Solution 2 - RegEx
function vowels(str) {
    // Will return an array of the matches, or null if none is found
    const matches = str.match(/[aeiou]/gi) 
    return matches ? matches.length : 0
}

module.exports = vowels;
