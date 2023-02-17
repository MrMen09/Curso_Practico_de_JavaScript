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
