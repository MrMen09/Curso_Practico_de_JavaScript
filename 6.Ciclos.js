/*
Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
un ciclo es un recurso que ejecutara el codigo en su interior tantas veces se lo indiquemos

¿Qué tipos de ciclos existen en JavaScript?
En JavaScript tenemos For y While

¿Qué es un ciclo infinito y por qué es un problema?
un ciclo infinito es cuando un ciclo no consigue la condicion para terminar, el mas comun es, por ejemplo, while(true). Es un problema debido a que al nunca terminar, llegara un punto en que acapara todos los recursos del equipo que lo ejecuta y además nunca consigue el objetivo

¿Puedo mezclar ciclos y condicionales?
Si, es posible
*/

/*
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
*/
var i = 0
while(i<5)
{
    console.log(`El valor de i es ${i}`);
    i++;
}
i = 10
while(i>=2)
{
    console.log(`El valor de i es: ${i}`);
    i--;
}


/*
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
*/
var respuesta = prompt("¿Cuanto es 2 + 2?");
if(respuesta == 4)
{
    console.log("Felicitaciones, es correcto")
}
else
{
    console.log("Es incorrecto")
}