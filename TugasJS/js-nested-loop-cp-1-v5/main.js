function buyThemAll(books, budget) {
  let jumlah = books.split(",");
  var judulBuku = "";
  var totalHarga = 0;
  var banyakBuku = 0;
  var bugdetAwal = budget;
  for (let index = 1; index <= jumlah.length; index++) {
    judulSplit = jumlah[index - 1].split(":");

    if (budget >= Number(judulSplit[1])) {
      budget -= Number(judulSplit[1]);
      banyakBuku += 1;
      judulBuku += " " + judulSplit[0] + ",";
      totalHarga += Number(judulSplit[1]); // total harga buku
    }
  }
  judulBuku = judulBuku.substr(0, judulBuku.length - 1)
  var sisaUang = bugdetAwal - totalHarga; // sisa uang
  if (banyakBuku<1) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${bugdetAwal}.`
  } else {
    return `Afista membeli ${banyakBuku} buku yaitu${judulBuku}. Total belanja ${totalHarga}, sisa uang Afista adalah ${sisaUang}.`
  }
}

console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
console.log(buyThemAll('Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
console.log(buyThemAll('Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
console.log(buyThemAll('Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

// console.log(
//   buyThemAll(
//     "The Alchemist:55000,The Hobbit:20000,The Power of Habit:10000,",
//     100000
//   )
// ); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
