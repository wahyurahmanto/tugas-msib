function reverseUnique(word) {
  let result = '';
  let prevWord = '';
  for (let i =word.length-1; i >= 0; i--){
    if (prevWord != word[i]){
     result += word[i]; 
    }
    prevWord = word[i]
  }
  return result;
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
