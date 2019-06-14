function enviar(form){
    let sal = form.salario.value;

    let novoSal = 0;
    let percentualDeAumento = 0;
    let valorAumento = 0;
    
    if(sal<=1200){
        valorAumento = ((sal * 120) /100) - sal;
        novoSal = (sal * 120) /100;
        percentualDeAumento += 20;
    }
    else if(sal<=2000){
        valorAumento = ((sal * 115) /100) - sal;
        novoSal = (sal * 115) /100;
        percentualDeAumento += 15;
    }
    else if(sal<=5000){
        valorAumento = ((sal * 110) /100) - sal;
        novoSal = (sal * 110) /100;
        percentualDeAumento += 10;
    }
    else{
        valorAumento = ((sal * 105) /100) - sal;
        novoSal = (sal * 105) /100;
        percentualDeAumento += 5;
    }

    elm = document.getElementById('resultado')

    elm.innerHTML='Salário antes do reajuste: R$'+sal+`<br>`+
    'Percentual de aumento aplicado: '+percentualDeAumento+'%'+`<br>`+
    'Valor do aumento: R$'+valorAumento +`<br>`+
    'Novo salário, após o aumento: R$'+novoSal;
}
