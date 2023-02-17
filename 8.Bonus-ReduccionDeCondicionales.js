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