const input = require("prompt-sync")();

let respuesta;
do {
    respuesta = input("Ingresa un cubierto - tenedor, cuchara, cuchillo o salir: ");

    if (respuesta === "tenedor") {
        tenedor();
    } else if (respuesta === "cuchara") {
        cuchara();
    } else if (respuesta === "cuchillo") {
        cuchillo();
    }
} while (respuesta !== "salir");

function tenedor() {
    console.log("l l l");
    console.log("l l l");
    console.log("l l l");
    console.log("l_l_l");
    console.log("  l ");
    console.log("  l ");
    console.log("  l ");
    console.log("  l");
}

function cuchara() {
    console.log("_____");
    console.log("l   l");
    console.log("l   l");
    console.log("l___l");
    console.log("  l ");
    console.log("  l ");
    console.log("  l ");
    console.log("  l");   
}

function cuchillo() {
    console.log("   /l");
    console.log("  / l");
    console.log(" /  l");
    console.log("/___l");
    console.log("  l l");
    console.log("  l l");
    console.log("  l l");
    console.log("  l_l");   
}
