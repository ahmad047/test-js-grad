/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

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
