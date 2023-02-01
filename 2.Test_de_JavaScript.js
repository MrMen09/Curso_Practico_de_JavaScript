/*
¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

Instrucciones para tomar esta prueba
Evalúa muy críticamente tu conocimiento.
Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.
Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!
*/

/*
Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
Una variables es una representación de un espacio que sera reservado en memoria para almacenar información

¿Cuál es la diferencia entre declarar e inicializar una variable?
La diferencia es que al declarar, le decimos al sistema que reserve un espacio en memoria y en algun momento sera utilizado. Por otro lado inicializar es almacenar algun tipo de información en un espacio de memoria

¿Cuál es la diferencia entre sumar números y concatenar strings?
Podriamos decir que la principal diferencia radica en el resultado, ya que, por ejemplo, si sumamos 1 + 4, el resultado sera 5, por otro lado si concatenamos "1" y "4" el resultado sera "14"

¿Cuál operador me permite sumar o concatenar?
El operador que nos permite sumar o concatenar es el +
*/

/*
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre - tipo String - Ejemplo: "Luis"
Apellido - tipo String - Ejemplo: "Mendoza"

Nombre de usuario en Platzi - tipo String - Ejemplo: "Mr_Men09"

Edad - tipo Number - Ejemplo: 21

Correo electrónico - tipo String - Ejemplo: "lemt.09@gmail.com"

Mayor de edad - tipo boolean - Ejemplo: true

Dinero ahorrado - tipo Number - Ejemplo: 160000

Deudas - tipo Number - Ejemplo: 330000
*/

/*
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/
var nombre = "Luis"
var apellido = "Mendoza"
var usuario = "Mr_Men09"
var edad = 21
var email = "lemt.09@gmail.com"
var mayor = true
var ahorrado = 160000
var deudas = 330000


/*
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/
var nomCompleto = nombre + apellido
var dineroReal = ahorrado - deudas

/*
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
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

/*
Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
Un condicional es una sentencia de control que nos permitira ejecutar una parte u otra del codigo evaluando precisamente una condicion

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
En javascript tenemos los condicionales if, else if, else y switch
la diferencia es que, if evalua una condición y si es verdadera, ejecuta el codigo. El if else evaluara otra condicion si la condicion del if fue falsa. El else se ejecutara si las condiciones if o if else fallan. Finalmente el switch evalua una serie de eventos determinados, se utiliza sobre todo para menus

¿Puedo combinar funciones y condicionales?
Si, se pueden combinar
*/

/*
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/

const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free")
{
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");    
}
else if(tipoDeSuscripcion == "Expert")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");    
}
else if(tipoDeSuscripcion == "ExpertPlus")
{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");    
}

/*
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
*/

var tipoDeSuscripcionArray = [{sus: "Free", mess: "Solo puedes tomar los cursos gratis"}, {sus:"Basic", mess: "Puedes tomar casi todos los cursos de Platzi durante un mes"}, {sus: "Expert", mess: "Puedes tomar casi todos los cursos de Platzi durante un año"}, {sus: "ExpertPlus", mess: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}];

var actual = "Basic"

var mensaje = tipoDeSuscripcionArray.find(function(suscripcion)
{
    if(suscripcion.sus == actual)
    {
        console.log(suscripcion.mess);
    }
})


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

/*
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Un array es una estructura de datos de tipo objeto que nos permite almacenar diferentes datos en el

¿Qué es un objeto?
un objeto es un ente independiente que tiene propiedades y tipos

¿Cuándo es mejor usar objetos o arrays?
depende de la situación, no hay uno mejor que otro, sino uno mas adecuado a la situación que otro

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, es posible
*/

/*
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/



