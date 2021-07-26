/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: 
  // the worst and average case is going to be O(n^2)
// Explain: 
  // As explained below, I have used a bubble sort to comply with level 2.

module.exports = function sortArray(arr) {
  _checkForType(arr); // as said below this was O(n)

  // I am using a simple bubble sort so the bubble sort is of time complexity O(n^2)
  if (arr.length == 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          _swap(arr, j); // as said already that this is O(1)
        }
      }
    }
    return arr;
  }
};

// The swap function is of constant time complexity. It is just an operation and it
// does not depend on the length of the array => therefore O(1)
const _swap = (arr, jIndex) => {
  let temp = arr[jIndex];
  arr[jIndex] = arr[jIndex + 1];
  arr[jIndex + 1] = temp;
};

// The checkForType function is of linear time complexity. In this loop I am doing
// two comparisons through the length of the array because it depends on the length
// of the array => therefore O(n)
const _checkForType = arr => {
  if (!Array.isArray(arr)) {
    throw new TypeError();
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) {
        throw new TypeError();
      }
    }
  }
};
