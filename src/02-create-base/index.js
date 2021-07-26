// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:
  // it is O(1)

// Explain:
  // regardless of the second integer, the same operation is performed
  // which is a simple addition

module.exports = createBase = integer => {
  return (functionForAddition = secondInteger => {
    return secondInteger + integer;
  });
};
