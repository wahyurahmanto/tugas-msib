function task1() {
  // TODO: answer here
  const random1 = document.getElementById('random-number').innerHTML;
  return random1;
}

function task1_1() {
  // TODO: answer here
  const random2 = document.getElementById("random-number-class").innerHTML;
  return random2
}
function task2() {
  // TODO: answer here
  const ubahdata = document.getElementById("task-2").innerHTML = "100";
  return ubahdata
}

function task3() {
  
  const tombol = document.querySelector("#task-3-button");
  const ubahcontent = document.querySelector("#task-3");
  
  tombol.addEventListener('click', () => {
  ubahcontent.innerHTML = '100';
  });

}

function task3_1() {
  const tombol2 = document.querySelector("#task-3-1-button");
  const ubahcontent2 = document.querySelector("#task-3-1");
  
  tombol2.addEventListener('click', () => {
  ubahcontent2.innerHTML = '';
  });
}

console.log("Number inside random-number element is: ", task1());
console.log("Number inside random-number-class element is: ", task1_1());
task2();
task3();
task3_1();

if (typeof module !== "undefined") {
  module.exports = { task1, task1_1, task2, task3, task3_1 };
}
