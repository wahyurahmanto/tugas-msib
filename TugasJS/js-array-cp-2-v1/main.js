function vocalCounter(array) {
    const vocal = ['a', 'i', 'u', 'e', 'o'];
    const filter = array.filter(str => typeof str == 'string')
    .filter(s => vocal.some(v => s.toLowerCase() == v));
    const sum = filter.length;

    if (sum > 0) return 'Jumlah vokal yang ditemukan sebanyak ' + sum + ' berupa ' + filter.join('');
    else return 'Tidak ada huruf vokal yang ditemukan';
        
        
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
