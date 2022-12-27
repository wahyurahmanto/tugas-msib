function deretanAngkaHinggaN(n) {
  var h="";
  if (n <= 1){
    return "Incorrect param"
  }
  else{

  while (n >= 1){
    a = n;
    for (let i = 1; i < n; i++){
      var angka = (n-i);
      h = h + angka.toString();
    }
    n--
  }
  return h;
}
  
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
