// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1

// function chunk(array, size) {
//   return array.reduce((acc,cur) => {
//     const last = acc[acc.length - 1]
//     if (!last || last.length === size) {
//       acc.push([cur])
//     } else {
//       acc[acc.length - 1].push(cur)
//     }
//     return acc
//   },
//   [])
// }

// Solution 2

function chunk(array, size) {
  let chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}


module.exports = chunk;
