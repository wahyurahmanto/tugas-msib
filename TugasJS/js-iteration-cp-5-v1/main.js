function generateParenthesesPair(numberOfPairs) {
  var hasil= "";
  for (let index=0; index < numberOfPairs; index++){
    hasil = "(" + hasil+ ")";
   }
    
  return hasil
}

// console.log(generateParenthesesPair(0)); // ''
// console.log(generateParenthesesPair(1)); // '()'
// console.log(generateParenthesesPair(2)); // '(())'
// console.log(generateParenthesesPair(3)); // '((()))'
// console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
