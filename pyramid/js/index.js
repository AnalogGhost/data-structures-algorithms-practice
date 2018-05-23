// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {}


// Solution 1 (Iterative)

// function pyramid(n) {
//     const totalCols = (2 * n) - 1
//     for (let row = 1; row <= n; row++) {
//         const hashes = (2 * row) - 1
//         const spaces = (totalCols - hashes) / 2
//         console.log(" ".repeat(spaces) + "#".repeat(hashes) + " ".repeat(spaces))
//     }
// }

// Solution 2 (Iterative) - No string repeat

// function pyramid(n) {
//     const midpoint = Math.floor((2*n -1 ) / 2)
//     for (let row=0; row < n; row++) {
//         let level = ''
//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

// Solution 3 (Recursive)

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return
    }

    if(level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1)
    }

    const midpoint = Math.floor((2*n -1 ) / 2)    

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#'
    } else {
        level += ' '
    }

    pyramid(n, row, level)
}

module.exports = pyramid;
