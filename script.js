let txt = document.getElementById("txtarea");
let txtsaida = document.querySelector("#txtsaida");

function criptografar() {
    let texto = txt.value;

    let resultCript = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("txtsaida").innerHTML = '<textarea readonly id="txtareasaida">' + resultCript + '</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    let texto = txt.value;

    let resultDescript = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("txtsaida").innerHTML = '<textarea readonly id="txtareasaida">' + resultDescript + '</textarea>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    let textoCop = document.getElementById('txtareasaida');
    
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}