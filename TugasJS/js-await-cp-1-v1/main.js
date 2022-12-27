const kondisi = async (number1, number2) => {
  if (number1 === 0 && number2 === 0){
    throw "Error";
  }if (number1 % 2 === 0){
    return number2 % 2 === 0 ? number1 - number2 : number1 + number2;
  } return number1 * number2;
}
const tolakkondisi = () => new Promise ((_, tolak) => {
  tolak ("number1 and number2 cannot be 0")
})
async function calculate(number1, number2) {
  try { const a = await kondisi (number1, number2);
    return a;
  }catch (error){
    return tolakkondisi();
  }
}

module.exports = calculate;
