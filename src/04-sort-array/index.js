/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function sortArray(arr) {
  if (arr.length == 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          _swap(arr, j);
        }
      }
    }
    return arr;
  }
};

const _swap = (arr, jIndex) => {
  let temp = arr[jIndex];
  arr[jIndex] = arr[jIndex + 1];
  arr[jIndex + 1] = temp;
};
