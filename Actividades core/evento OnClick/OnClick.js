
function logOut(elemento){
    elemento.innerText = "Cerrar sesión";
}

function erase(elemento){
    elemento.remove();
}

function upCount(elemento){
    like += 1;
    elemento.innerText = like+' Me gusta';
    alert("Golden Retriever was liked");
}

let like = 42

function upCount1(elemento){
    like2 += 1;
    elemento.innerText = like2+' Me gusta';
    alert("Gatito atigrado was liked");
}

let like2 = 22

