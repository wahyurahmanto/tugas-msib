function checkDatatype(n){
    var b = n;
    if (b instanceof Array){
        return 'array';
    } else if(b == null){
        return 'null'
    }else {
        return typeof n;
    }
   
}
console.log(checkDatatype(null));

module.exports = {checkDatatype};