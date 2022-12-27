const urutdataarray = (array) => {
    return array.sort ((prev, curr) => {
        if (prev < curr) {
            return -1
        }
        if (prev > curr) {
            return 1
        }
        return 0
    })
}
function travelSeat(passengers, seatColumn) {
    if (seatColumn < 1) {
        return "Invalid number"
    } if (passengers.length < 1) {
        return "Oops! tickets not sold!"
    }
    const arrayterurut = urutdataarray (passengers)
    const pembagian = []
    let penampungarray = []
    let index = 0
    const kolom = Math.ceil(arrayterurut.length / seatColumn)
    const panjangarray = kolom * seatColumn
    const panjangawal = [...arrayterurut].length

    for (let i = 1; i <= panjangarray - panjangawal; i++){
        arrayterurut.push(undefined)
    }

    arrayterurut.forEach(el => {
        if(el === undefined){
            penampungarray.push ('Seat available')
        } else{
            penampungarray.push (el)
        }
        if(index === seatColumn -1){
            pembagian.push (penampungarray)
            penampungarray = []
            index = 0
        } else [
            index++
        ]
    })
   
    return pembagian; // TODO: replace this
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat
