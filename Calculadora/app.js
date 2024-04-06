//Preguntar la sintaxis de l'operació factura*propina/100
//Alert funciona així o s'hauria de crear una const amb addEventListener pel click al botó Calcular¿?

function calcular() {
    let factura = document.getElementById("factura").value
    let propina = document.getElementById("propina").value
    let resultado = factura * propina / 100
    document.getElementById("resultado").innerHTML = resultado
    alert("Total a pagar =" + [factura+resultado])
}