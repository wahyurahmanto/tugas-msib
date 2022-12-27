function countAndSum(number) {
  var h = 0;
  for (let index = 1; index <= number; index++) {
      if (index > 3) {
          if (index % 3 != 0) {
              h = h + (index % 3);
          } else {
              h += 3
          }
      } else {
          h = h + index;
      }
  }
  
  return h // TODO: replace this
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
