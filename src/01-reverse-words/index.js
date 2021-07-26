/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
  //  O(n^2) is the worst and average case here for time complexity

// Explain:
  // Each of the functions below have their own time complexity. Because the map
  // function is O(n) and within the map function we are using split, reverse and join all of which
  // are O(n). Therefore =>  this is an O(n^2) as this is equivalent of doing a nested loop

module.exports = function reverseWordsInSentence(input) {
  // called private method for creating an array of reversed words
  const reversedArray = _createReversedArray(input);

  // rejoined final array into a string
  return reversedArray.join(' ');
};

const _createReversedArray = input => {
  return input.split(' ').map(x => {
    return x.split('').reverse().join('');
  });
};
