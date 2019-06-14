function enviar(form){
    let msg = '';
    const elm = document.getElementById('resultado');

    for (let i = 0; i < form.length; i++) {
        if(!form[i].value) {
            msg += `O campo ${form[i].name} é obrigatorio <br>`;
            form[i].style.borderColor = 'red';
        }  else{
            form[i].style.borderColor = '';
        }
    }
    
    if(msg){
        elm.innerHTML = msg;
    } else{
        let results = form.valordoProduto.value * form.quantidade.value;
        elm.innerHTML = 'O valor total é de R$'+ results;
        alert('Formulario enviado com sucesso!');
    }
}
// fiquei 1 hr tentando entender o onblur, pra no fim não usa-lo auhuhashu