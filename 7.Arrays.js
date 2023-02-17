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
*/
function primerElemento(arreglo)
{
    console.log(arreglo[0]) 
}
/*
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
*/
function imprimirElementos(arreglo = [])
{
    for(var i = 0; i<arreglo.length(); i++)
    {
        console.log(arreglo[i])
    }
}
/*
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/
function imprimirAtributos(objeto = {})
{
    objetoArreglo = Object.values(objeto)
    for(var i = 0; i < objetoArreglo.length(); i++)
    {
        console.log(objetoArreglo[i])
    }
}