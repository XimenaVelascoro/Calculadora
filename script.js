const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = ""; //cadena de texto vacia
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();//convertir en texto toString ...
      display.innerText = string.substr(0, string.length - 1);//(0, el primer valor)borrar 1 a 1 
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

//foreach aqui se manipulan los arrays, ¡que son los array y los objects? IMPORTANTE
//objects. evento (e) la forma en que el usuario
//manipula la pagina 
//por cada boton haga esto ... 
//buscar que son los operadores y como funcionan en js 
// si el usuario da click y ... (operadores)
//eval no es buena practica 
//que es setTimeOut 
//2000 ms = 2s
// que es + = 