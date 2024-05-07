// get elements
let inp = document.querySelector("input")

let result = document.querySelector(".result")

let usaDollar = 47.7700;

inp.oninput = function() {
  let val = this.value
  result.firstChild.innerText  = `{${val}} USD Dollar`;
  result.lastChild.innerText  = `{${val * usaDollar}} USD Dollar`;



}






