const h1 = document.querySelector("h1")

const input1  = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const form = document.querySelector("#form")
const pResult = document.querySelector("#pResult")

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event)
{

    console.log({event});
    event.preventDefault();

    console.log("Escuchando el evento de Click")

    console.log(input1.value + input2.value)

    sumaInputs = input1.value + input2.value

    pResult.innerText = "Resultado " + sumaInputs
}