let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let botao = document.getElementById('botao');
resultado = document.getElementById('resulatdo');

botao.onclick = () => {
    let imc = Number(peso.value) / (Number(altura.value)**2);
    let classificacao = '';
    if( imc< 18.5){
        classificacao = 'Abaixo do peso' ;
    }else if(imc<25){
        classificacao = 'Peso Normal' ;
    }else if(imc<30){
        classificacao = 'Sobre Peso' ;
    }else if(imc<35){
        classificacao = 'Obesidade Grau 1' ;
    }else if(imc<40){
        classificacao = 'Obesidade Grau 2' ;
    }else{
        classificacao = 'Obesidade Grau 3 (Grave)' ;
    }
    resultado.innerText = `Seu IMC é:${imc.toFixed(2)}\n Classificação: ${classificacao}`
}