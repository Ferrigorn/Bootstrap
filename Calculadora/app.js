

function calcular() {
    let factura = document.getElementById("factura").value;
    let propina = document.getElementById("propina").value;
    let facturaint = parseInt(factura);
    let propinaint = parseInt(propina);
    let resultado = facturaint * propinaint / 100;
    let resultadoint = parseInt(resultado);
    document.getElementById("resultado").innerHTML = resultadoint;
    let total = facturaint + resultadoint;
    alert( total)
}