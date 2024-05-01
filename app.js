const btn = document.querySelector("button");
const h3 = document.querySelector("h3");
const div = document.querySelector("div");


btn.addEventListener("click",function () {
    let random = randomColour();
    h3.innerText = random;
    div.style.backgroundColor = random;
});

function randomColour() {
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    let colour = `rgb(${red},${green},${blue})`;
    return colour;
}