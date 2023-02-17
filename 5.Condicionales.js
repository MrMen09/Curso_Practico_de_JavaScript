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

