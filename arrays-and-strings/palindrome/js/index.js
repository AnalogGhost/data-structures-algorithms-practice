// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// const palindrome = str => str === str.split('').reverse().join('')

// Solution 2
// const palindrome = str => str === str.split('').reduce((acc,cur) => cur + acc,'')

// Solution 3
// const palindrome = str => {
//     let reversed = ''

//     for (let character of str) {
//         reversed = character + reversed
//     }

//     return reversed === str
// }

// Solution 4
const palindrome = str => str.split('').every((char, i) => char === str[str.length - i - 1])

module.exports = palindrome;
