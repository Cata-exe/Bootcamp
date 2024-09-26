function pizzaOven(tipoDeCorteza, salsa, quesos, extra) {
    var pizza = {};
    pizza.corteza = tipoDeCorteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.extras = extra;
    return pizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", "mozzarella", ["pepperoni", "salchicha"]);
console.log(p1);

var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(p2);

var p3 = pizzaOven("romana", "tradicional", "mozzarella", ["aceitunas", "pepperoni", "tocino"]);
console.log(p3);

var p4 = pizzaOven("americana" , "barbacoa", "cheddar", ["tocino", "carne", "pollo"]);
console.log(p4);

/* la solucion era asi;
function pizzaOven(tipoDeCorteza, salsa, quesos, extra) {
    var pizza = {
    corteza = tipoDeCorteza;
    salsa = salsa;
    quesos = quesos;
    extras = extra;
    return pizza;
    };
} */