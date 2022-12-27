function splitToArr(str) {
    var data = str;
    var hasil_akhir = [];
    if (Boolean(data)){
        var result1 = data.replace(/[;-]/g, '*');
        // result1.split("*");
        var hasil = result1.split("*");
        for (let i = 0; i < hasil.length; i++){
        hasil_akhir.push(hasil[i].charAt(0).toUpperCase() + hasil[i].slice(1));
        }
        return(hasil_akhir)

        
    }

    if(data ==""){
        return("Data not available");
    } else if(data = "undefined"){
        return ("Invalid input");
    } 


   
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr())
console.log(splitToArr(""))
// console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
// console.log(splitToArr(""))

module.exports = splitToArr