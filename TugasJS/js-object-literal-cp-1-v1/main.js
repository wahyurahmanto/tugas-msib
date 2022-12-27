function counterApp(arr) {
    if (arr == undefined){
        return "Invalid input"
    }
    if (arr.length < 1){
        return "Data not found"
    }
    const obj={}
    arr.forEach(a => {
        const b = a
        if (obj [b] === undefined){
            obj [b] = 1
        }
        else {
            obj[b] += 1
        }
    })
    return obj; // TODO: replace this
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
