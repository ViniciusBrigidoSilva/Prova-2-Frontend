function enviar(form){
    let msg1 = form.precoNovo.value;
    let msg2= form.precoVelho.value;

    let result = (msg1 * 100) / msg2 - 100 ;

    elm = document.getElementById('resultado')

    elm.innerHTML='o aumento foi de ' + result + '%';
}
