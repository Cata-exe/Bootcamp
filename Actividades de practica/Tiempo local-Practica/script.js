
alert("Cargando Reporte del Clima");


cookiebutton.addEventListener('click', function(evento){
    evento.target.closest('footer').remove();
});


function cargarInformacion(elemento, ciudad){
    let elementoMain = document.querySelector('main');

    if(ciudad === "Buenos Aires"){
    elementoMain.innerHTML = `
        <div class="argentina">
            <h1>Buenos Aires</h1>
            <div class="buenosAires">
                <div class="dias">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Hoy</h3>
                    <p>Nublado</p>
                    <span>22°C-15°C</span>
                </div>
                <div class="dias">
                    <img src="./img/lightrain.png" alt="lluvia leve">
                    <h3>Mañana</h3>
                    <p>Lluvioso</p>
                    <span>20°C-13°C</span>
                </div>
                <div class="dias">
                    <img src="./img/thunder.png" alt="tormenta">
                    <h3>Miércoles</h3>
                    <p>Tormentas</p>
                    <span>18°C-11°C</span>
                </div>
                <div class="dias">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Jueves</h3>
                    <p>Parcialmente nublado</p>
                    <span>21°C-14°C</span>
                </div>
                <div class="dias">
                    <img src="./img/sun.png" alt="soleado">
                    <h3>Viernes</h3>
                    <p>Soleado</p>
                    <span>24°C-17°C</span>
                </div>
            </div>
        </div>
    `
    }
    else if(ciudad === "Ciudad de Mexico"){
        elementoMain.innerHTML = `
            <div class="mexico">
            <h1>Ciudad de México</h1>
            <div class="ciudadmexico">
                <div class="dias1">
                    <img src="./img/sun.png" alt="soleado">
                    <h3>Hoy</h3>
                    <p>Soleado</p>
                    <span>28°C-19°C</span>
                </div>
                <div class="dias1">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Mañana</h3>
                    <p>Nublado</p>
                    <span>26°C-18°C</span>
                </div>
                <div class="dias1">
                    <img src="./img/lightrain.png" alt="lluvioso">
                    <h3>Miércoles</h3>
                    <p>Lluvioso</p>
                    <span>24°C-17°C</span>
                </div>
                <div class="dias1">
                    <img src="./img/thunder.png" alt="tormenta">
                    <h3>Jueves</h3>
                    <p>Tormentas</p>
                    <span>22°C-16°C</span>
                </div>
                <div class="dias1">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Viernes</h3>
                    <p>Parcialmente nublado</p>
                    <span>25°C-18°C</span>
                </div>
            </div>
        </div>
        `
    }
    else if(ciudad === "Santiago"){
        elementoMain.innerHTML = `
            <div class="chile">
            <h1>Santiago</h1>
            <div class="santiago">
                <div class="dias2">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Hoy</h3>
                    <p>Parcialmente nublado</p>
                    <span>23°C-16°C</span>
                </div>
                <div class="dias2">
                    <img src="./img/sun.png" alt="soleado">
                    <h3>Mañana</h3>
                    <p>Soleado</p>
                    <span>26°C-18°C</span>
                </div>
                <div class="dias2">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Miércoles</h3>
                    <p>Nublado</p>
                    <span>24°C-17°C</span>
                </div>
                <div class="dias2">
                    <img src="./img/lightrain.png" alt="lluvioso">
                    <h3>Jueves</h3>
                    <p>Lluvioso</p>
                    <span>22°C-15°C</span>
                </div>
                <div class="dias2">
                    <img src="./img/thunder.png" alt="tormenta">
                    <h3>Viernes</h3>
                    <p>Tormentas</p>
                    <span>20°C-13°C</span>
                </div>
            </div>
        </div>
        `
    }
    else if(ciudad === "Sao Paulo"){
        elementoMain.innerHTML = `
            <div class="brazil">
            <h1>Sao Paulo</h1>
            <div class="saoPaulo">
                <div class="dias3">
                    <img src="./img/lightrain.png" alt="lluvioso">
                    <h3>Hoy</h3>
                    <p>Lluvioso</p>
                    <span>26°C-19°C</span>
                </div>
                <div class="dias3">
                    <img src="./img/thunder.png" alt="tormenta">
                    <h3>Mañana</h3>
                    <p>Tormentas</p>
                    <span>25°C-18°C</span>
                </div>
                <div class="dias3">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Miércoles</h3>
                    <p>Nublado</p>
                    <span>27°C-20°C</span>
                </div>
                <div class="dias3">
                    <img src="./img/sun.png" alt="soleado">
                    <h3>Jueves</h3>
                    <p>Soleado</p>
                    <span>30°C-22°C</span>
                </div>
                <div class="dias3">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Viernes</h3>
                    <p>Nublado</p>
                    <span>28°C-21°C</span>
                </div>
            </div>
        </div>
        `
    }
    else{
        elementoMain.innerHTML = `
            <div class="ecuador">
            <h1>Quito</h1>
            <div class="quito">
                <div class="dias4">
                    <img src="./img/thunder.png" alt="tormenta">
                    <h3>Hoy</h3>
                    <p>Tormentas</p>
                    <span>17°C-10°C</span>
                </div>
                <div class="dias4">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Mañana</h3>
                    <p>Parcialmente nublado</p>
                    <span>19°C-14°C</span>
                </div>
                <div class="dias4">
                    <img src="./img/sun.png" alt="soleado">
                    <h3>Miércoles</h3>
                    <p>Soleado</p>
                    <span>22°C-15°C</span>
                </div>
                <div class="dias4">
                    <img src="./img/cloud.png" alt="nublado">
                    <h3>Jueves</h3>
                    <p>Nublado</p>
                    <span>20°C-13°C</span>
                </div>
                <div class="dias4">
                    <img src="./img/lightrain.png" alt="lluvioso">
                    <h3>Viernes</h3>
                    <p>Lluvioso</p>
                    <span>18°C-12°C</span>
                </div>
            </div>
        </div>
        `
    }
}
