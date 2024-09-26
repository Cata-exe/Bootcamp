
let accept = document.querySelectorAll('.accept');
let requestCount = document.getElementById('count');
let conexiones = document.getElementById('addedFriends');

for(let i = 0; i < accept.length; i ++){
    accept[i].addEventListener('click', function(event){
        let count = requestCount.textContent;
        count--;
        requestCount.textContent = count;
        let addedFriends = conexiones.textContent;
        addedFriends++;
        conexiones.textContent = addedFriends;
        event.target.closest('.request').remove();
    });
}

//selecciona el boton que esta denominado por la clase editProfile
let cambiarNombre = document.querySelector('.editProfile');
//le da un evento de click, es decir al hacer click al boton se aplica la funcion
cambiarNombre.addEventListener('click', function() {
    //la funcion cambia el texto interno del elemento html que tiene la clase name por "jane doe".
    document.querySelector('.name').innerHTML = "Jane Doe";
});

// document.querySelector('.name').innerHTML = "Jane Doe"; [cambia el texto base al cargar la pagina]


/*
let botonesCerrar = document.querySelectorAll('.cerrar');

for(let i = 0; i < botonesCerrar.length; i++){
    botonesCerrar[i].addEventListener('click', function(event){
        event.target.closest('.card-list-item').remove();
        let contadorConexiones = document.querySelector('#connectionRequestNumber');
        let numeroConexiones = Number(contadorConexiones.innerText);
        //number es una funcion en js que forza el contenido a ser un numero, en este caso antes el numero era un string
        numeroConexiones --;
        contadorConexiones.innerText = numeroConexiones;
    });
}
    */