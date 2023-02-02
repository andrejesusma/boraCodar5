var input = document.querySelector('#resultInput');
var span = document.querySelector('span');
function insert(number) {
  var verify = input.innerHTML.length;
  if(verify <= 10){
    input.innerText = input.innerHTML + number
  }else{
    if (verify > 20){
      alert('Número máximo de dígitos atingido')
    }else{
      input.style.fontSize = "16px";
      input.innerText = input.innerHTML + number
    }
  }
}
function calc() {
  var equacao = input.innerHTML;
  if (equacao) {
    try {
      input.innerHTML = eval(equacao);
      span.innerHTML = equacao
    } catch (e) {
      alert('Erro na expressão');
      input.innerHTML = "";
      span.innerHTML = "";
    }
  }
}
function limpar(){
  input.innerHTML = "";
  span.innerHTML = "";
  input.style.fontSize = "35px";
}
function limparC(){
  input.innerHTML = "0";
  input.style.fontSize = "35px";
}
function back(){
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length -1)
  if(input.innerHTML.length < 1 && span.innerHTML.length > 0){
    input.innerHTML = "0";
  }
}
function invert(){
  if(input.innerHTML > 0){
    var inverted = input.innerHTML - (input.innerHTML*2);
    span.innerHTML = "inveted("+input.innerHTML+")";
    input.innerHTML = inverted;
  } else {
    var inverted = eval(input.innerHTML - eval(input.innerHTML + input.innerHTML));
    span.innerHTML = "inveted("+input.innerHTML+")";
    input.innerHTML = inverted;
  }
  console.log(inverted)
}