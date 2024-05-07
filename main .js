// get elements
let inp = document.querySelector("input")

let result = document.querySelector(".result")

let usaDollar = 47.7700;

inp.oninput = function() {
  let val = this.value
  result.firstChild.innerText  = `{${val}} USA Dollar`;
  result.lastChild.innerText  = `{${val * usaDollar}} Egyptian Pound`;



}






