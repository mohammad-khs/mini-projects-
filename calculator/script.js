
function display(val) {

  document.querySelector("#text-box").value += val;

  

}

function solve() {
  let x = document.querySelector("#text-box").value;

  //thats where all the calculation comes
  let y = eval(x);
  document.querySelector("#text-box").value = y;




}

function clearScreen() {
  document.querySelector("#text-box").value = "";
}

function del() {
  let nums = document.querySelector("#text-box").value.split("");
  nums.pop();

  let numss = nums.join().replaceAll(',', '');

  document.querySelector("#text-box").value = numss;


}

function displayDivide() {
  if (display.value = '÷') {

    del()
    document.querySelector("#text-box").value += '/'
  }
}


