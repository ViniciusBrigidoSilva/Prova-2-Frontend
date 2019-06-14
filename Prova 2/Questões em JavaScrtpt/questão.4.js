let valorInvestido = 1000;
let resultado = valorInvestido;
let i = 0;

while(i<= 11){
    resultado = resultado * 103 / 100;
    i++
    console.log("Após "+i+" mes(es), o valor recebido é de: R$"+resultado.toFixed(2));
}