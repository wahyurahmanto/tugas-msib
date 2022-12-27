function printNumber(totalNumber) {
    var h = "";
    for (let index = 1; index <= totalNumber; index++) {
        if (index > 3) {
            if (index % 3 != 0) {
                h = h + (index % 3).toString();
            } else {
                h = h + "3"
            }
        } else {
            h = h + index.toString();
        }
    }
    
    return h;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
