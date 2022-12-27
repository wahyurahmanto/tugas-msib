function discountChecker(costumers, date) {
    const member = costumers.filter(el => {
    const hargabarang = el[0]
    const status = el[1]
        if(status === 'member'){
            return el
        }
    const harga = [...hargabarang].filter(el => el !== '$' && el !== " ")
    let hargastr = ''
        harga.forEach(el => {
            hargastr += el
        })
    const harganbr = Number(hargastr)
    let tgl = ''
    for (let i = 0; i < date.length; i++){
        if (date[i] === '-'){
        break}
    tgl += date[i]}
    let tanggalnbr = Number(tgl)
    const hargagenap = harganbr % 2 === 0
    const tanggalgnp = tanggalnbr % 2 === 0
    if (hargagenap === tanggalgnp)
    return el
    console.log ({tanggalnbr})
    })
    return member; 
}
let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]
console.log(discountChecker(costumers, "28-10-2022"))
var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]
console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
