Funciones
/*1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Una función es una forma de ahorrar codigo. Se utiliza cuando una acción se lleva a cabo de forma reiterada.

¿Cuándo me sirve usar una función en mi código?
Precisamente es util cuando necesito usar una misma acción varias veces. Por ejemplo registrar a un usuario

¿Cuál es la diferencia entre parámetros y argumentos de una función?
Un parametro es una variable declarada que recibira la función 
Un argumento es una variable la cual recibira la funcion en tiempo de ejecución, es decir, cuando se inicializara la variable
*/

/*
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function presentacion(name, lastname, nickname)
{
    console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}`)
}

