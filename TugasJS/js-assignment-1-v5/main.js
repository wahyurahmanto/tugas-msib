function travelDiscount(id, amount) {
    var statuss ='';
    var hargaTot = 0;
    if(id.search('STD')>=0){
        hargaTot = amount * 20000;
        statuss = "STUDENT";
        if(amount > 20){
            hargaTot = hargaTot - (hargaTot * (20/100))
        }
    } else if(id.search('CORP')>=0){
        statuss = "CORPORATE";
        hargaTot = amount * 50000;
        if(amount > 30){
            hargaTot = hargaTot - (hargaTot * (25/100))
        }
    } else{
        statuss ='';
        return "Maaf, voucher yang anda miliki tidak valid!"
    }
    return `Selamat! Voucher untuk ${statuss} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${hargaTot}.`
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
