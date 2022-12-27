function reverseUnique(word) {
    let a = word.split('');
    for (i = 0; i <= word.length; i++) {
      for (j = i+1; j < word.length; j++) {
          if(word[i] == word[j]) {
            a.splice(i, 1)
        }
      }
    // a.unshift(word[i]);
    }
    return a.reverse().join('');
  }
  
  console.log(reverseUnique('greating')); //gnitaerg
  console.log(reverseUnique('learning')); //gninrael
  console.log(reverseUnique('book')); // kob
  console.log(reverseUnique('RuangGuru')); //uruGnauR
  console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I
  
  module.exports = reverseUnique;
  