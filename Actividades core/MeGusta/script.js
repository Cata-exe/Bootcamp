
const boton = document.querySelector("#button1");
let likeNumber = document.querySelector("#like1");

boton.addEventListener("click", function() {
    let like = likeNumber.textContent;
    like++;
    likeNumber.textContent = like;
});

const boton2 = document.querySelector("#button2");
let likeNumber2 = document.querySelector("#like2");

boton2.addEventListener("click", function() {
    let like = likeNumber2.textContent;
    like++;
    likeNumber2.textContent = like;
});

const boton3 = document.querySelector("#button3");
let likeNumber3 = document.querySelector("#like3");

boton3.addEventListener("click", function() {
    let like = likeNumber3.textContent;
    like++;
    likeNumber3.textContent = like;
});

