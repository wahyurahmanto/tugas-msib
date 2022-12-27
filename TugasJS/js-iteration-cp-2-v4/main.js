function trasureHunter(dailyLog) {
  var harta = 0;

  for (let index = 0; index < dailyLog.length; index++) {
    if (dailyLog[index] == "x" && harta < 10) {
      harta = 0;
    } else if (dailyLog[index] == "#" && harta == 0) {
      harta = 0;
    } else {
      if (dailyLog[index] == "$") {
        harta += 100;
      }
      if (dailyLog[index] == "x") {
        harta -= 10;
      }
      if (dailyLog[index] == "#") {
        harta -= 0.5 * harta;
      }
    }
  }

  return harta
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
