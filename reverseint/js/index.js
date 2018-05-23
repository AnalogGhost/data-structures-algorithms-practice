// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1 (one liner)
// const reverseInt = n => Math.sign(n) * Number(Math.abs(n).toString().split('').reverse().join(''))

// Solitoon 2 (Broken Out)

// const reverseInt = n => {
//   const sign = Math.sign(n)
//   let reversed = Number(Math.abs(n).toString().split('').reverse().join(''))
//   return sign * reversed
// }


// Solution 3 (parseInt)

const reverseInt = n => Math.sign(n) * parseInt(n.toString().split('').reverse().join(''))


module.exports = reverseInt;
