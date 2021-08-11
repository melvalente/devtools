
function gerarCPF(comPontuacao){
    
    var noveDigitos = gerarNumeroAleatorio(9) + '';
    var v0 = noveDigitos.charAt(0) * 10;
    var v1 = noveDigitos.charAt(1) * 9;
    var v2 = noveDigitos.charAt(2) * 8;
    var v3 = noveDigitos.charAt(3) * 7;
    var v4 = noveDigitos.charAt(4) * 6;
    var v5 = noveDigitos.charAt(5) * 5;
    var v6 = noveDigitos.charAt(6) * 4;
    var v7 = noveDigitos.charAt(7) * 3;
    var v8 = noveDigitos.charAt(8) * 2;

   var dDigito = (v0 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8) * 10 % 11;

    v0 = noveDigitos.charAt(0) * 11;
    v1 = noveDigitos.charAt(1) * 10;
    v2 = noveDigitos.charAt(2) * 9;
    v3 = noveDigitos.charAt(3) * 8;
    v4 = noveDigitos.charAt(4) * 7;
    v5 = noveDigitos.charAt(5) * 6;
    v6 = noveDigitos.charAt(6) * 5;
    v7 = noveDigitos.charAt(7) * 4;
    v8 = noveDigitos.charAt(8) * 3;
    v9 = dDigito * 2;

   var uDigito = (v0 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9) * 10 % 11;

    var CPF = noveDigitos +''+ dDigito +''+ uDigito;

    if (comPontuacao){
        CPF = pontCPF(CPF);

    }

   return CPF;


}




function gerarNumeroAleatorio(qtdDeDigitos){

    var numeroAleatorio = "";
    for(var num = 1; num <= qtdDeDigitos; num++){
        var numeroAtual = Math.floor(Math.random() * (9 - 0 + 1)) + 0;;
        numeroAleatorio = numeroAleatorio + numeroAtual; 
    }

    return numeroAleatorio;
    
}

function buttonLimpar (){

    $('#textocpf').val ('');
}

function buttonGerarCPF(){

    var comPontuacao = $("#inlineRadio1").prop("checked");
    var cpfGerado = gerarCPF(comPontuacao);
    $('#textocpf').val(cpfGerado);
}

function pontCPF(cpf){

    cpf=cpf.replace(/\D/g,"");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return cpf;

}

function mascaraPont(){

    
    var comPontuacao = $("#inlineRadio1").prop("checked");

    alert('Está marcado');

    // se for sim, buscar o valor do campo cpf e adicionar a mascara e atualizar o campo

    // se for não, buscar o valor do campo cpf e remover a mascara e atualizar o campo


}