const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log(input.value)

console.log(
    {
        h1,
        p,
        parrafito,
        pid,
        input,
    }
)

h1.innerText = "Cambiando el titulo desde JavaScript"

h1.classList.add("rojo")
h1.classList.remove("verde")
input.value = "456"

const img = document.createElement("img")
img.setAttribute("src", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.es%2Ffotos%2Fprogramacion&psig=AOvVaw0zdn2GxOmqikJO1ZtQhOES&ust=1676751064505000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJi2ipevnf0CFQAAAAAdAAAAABAE")

pid.append(img)