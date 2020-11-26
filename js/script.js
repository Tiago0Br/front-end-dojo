let images = 10

let elements = []
let element
let img

for (let c = 1; c <= images; c++) {
    element = document.createElement("div")
    element.classList.add("item")
    img = document.createElement("img")
    img.src = `../img/mini${c}.jpg`
    img.classList.add("box-filme")
    element.appendChild(img)
    document.getElementById("teste").appendChild(element)
}