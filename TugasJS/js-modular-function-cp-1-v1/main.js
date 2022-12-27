const bilangan = (angka) => {
  return (angka.toFixed(2)) * 1
}
function kelvinToCelsius(kelvin) {
  return bilangan (kelvin - 273.15)
}
function kelvinToFahrenheit(kelvin) {
  return bilangan ((kelvin - 273.15) * 9/5 + 32)
}
function celsiusToFahrenheit(celsius) {
  return bilangan ((celsius * 9/5) + 32)
}
function celsiusToKelvin(celsius) {
  return bilangan (celsius + 273.15)
}
function fahrenheitToKelvin(fahrenheit) {
  return bilangan ((fahrenheit - 32) * 5/9 + 273.15)
}
function fahrenheitToCelsius(fahrenheit) {
  return bilangan ((fahrenheit - 32) * 5/9)
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  if (initialUnit === finalUnit){
    return temperature
  }
  if (initialUnit === 'C'){
    if (finalUnit === 'K'){
      return celsiusToKelvin (temperature)
    }
    else{
      return celsiusToFahrenheit (temperature)
    }
  }
  if (initialUnit === 'K'){
    if (finalUnit === 'C'){
      return kelvinToCelsius (temperature)
    }
    else{
      return kelvinToFahrenheit (temperature)
    }
  }
  if (initialUnit === 'F'){
    if (finalUnit === 'C'){
      return fahrenheitToCelsius (temperature)
    }
    else{
      return fahrenheitToKelvin (temperature)
    }
  }
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
