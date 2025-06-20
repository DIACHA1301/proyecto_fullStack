let ventasDiarias = [200, 900, 1100, 500, 100, 250]

function promedioVtas(ventasDiarias) {
    let suma = ventasDiarias.reduce ((acumulador, valor) => acumulador + valor, 
    0);
    return suma/ventasDiarias.length;

}

const prom = promedioVtas(ventasDiarias)
console.log(prom);