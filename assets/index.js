AdicionarNumero = (Num) => {
    let PrimeiroNumero = document.getElementById('resultado').textContent;
    document.getElementById('resultado').textContent = PrimeiroNumero + Num;
}
Apagar = () => {
    let resultado = document.getElementById('resultado').textContent;
    document.getElementById('resultado').textContent = resultado.substring(0, resultado.length -1);
}
Limpar = () => {
    document.getElementById('resultado').textContent = '';
}
Calcular = () => {
    let Resultado = document.getElementById('resultado').textContent;
    if(Resultado) {
        document.getElementById('resultado').textContent = eval(Resultado);
    }
}