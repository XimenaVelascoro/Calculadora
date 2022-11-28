
Logre por medio de un video tutorial hacer funcionar
una calculadora con operaciones basicas, al principio tenia una idea diferente 
y ya haciendo una retroalimentación entendi con desde Javascript se pudo lograr 
darle logica a la calculadora,  por medio de eval es que se realizan las operaciones, 
tambien pude ver que todo se hizo mediante un evento.

Vi otros turoriales donde explicaban como hacerlo desde la misma hoja de Html 
con una etiqueta input type button con el value (de cada número y operación
correspondiente) y llamando, no se en el momento si lo este diciendo bien 
pero llama un evento directo de Javascript 
<form name ="calculator">(contenedor padre)
<input type="textfield" name="ans" value="" autocomplete="off" readonly>
onclick=document.calculator.ans.value+="7" por ejemplo con el numero 7 
esto para que se vea que al dar click en el (7) se vea en la pantalla asi con 
todos los botones y aqui tambien la magia en el (=) ocurre con el eval quedando asi
onclick=document.calculator.ans.value+=eval(onclick=document.calculator.ans.value)
no se concatena sino que se iguala el resultadopor eso entre parentesis se pone el mismo -texto-
