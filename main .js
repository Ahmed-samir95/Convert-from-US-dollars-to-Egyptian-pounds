// get elements
let inp = document.querySelector("input")

let result = document.querySelector(".result")

let usaDollar = 40

inp.oninput = function() {
  let val = this.value
  result.firstChild.innerText  = `{${val}} USD Dollar`;
  


}
