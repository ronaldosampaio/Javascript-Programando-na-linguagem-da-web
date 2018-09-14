var todaLista = document.querySelector("#lista");//seleciona toda tag <ul>
var numeroLi = document.createElement("li");//Cria tag  <li></li> vazia
numeroLi.classList.add("numero_tres");//adiciona uma Class="numero_tres"
numeroLi.textContent = 3; // insere numero 3 dentro da li vazia
todaLista.appendChild(numeroLi);//inseri <li>3</li> dentro do pai <ul>
console.log(todaLista);


/*
var num1 = document.querySelector(".numero_um");
var num2 = document.querySelector(".numero_dois");
var num3 = document.querySelector(".numero_tres");
*/


var totalValores = document.querySelector(".total");
totalValores.textContent = calculo(totalValores);
//totalValores.textContent = calculo(num1,num2,num3);
//console.log(calculo(totalValores));  



//função que retorna o calculo dos valores
function calculo(total){
    var num1 = document.querySelector(".numero_um");

    var num2 = document.querySelector(".numero_dois");
    
    var num3 = document.querySelector(".numero_tres");
    
    var total = document.querySelector(".total");
    total = num1.textContent  * num2.textContent * num3.textContent;
    
    console.log("Retorno do total: " , total);
    
    return total;  
}
/*---------------------------------------------------------------------*/


function buscaElemento(seletor){
    return document.querySelector(seletor);
}

var tabuada = buscaElemento('.tabuada');
var numero = buscaElemento('.numero');
var resultado = buscaElemento('.resultado');
var botao = buscaElemento('.botao');

function calculaTabuada(colocaQualquerParametro){
    return resultado = tabuada.value * numero.value;
}

botao.addEventListener('click', function(){
    //botao.preventDefault;
    resultado.textContent = calculaTabuada(resultado);
   
   
});

/*

//funçao que retorna valores outra forma

function calculo(numero1,numero2, numero3){
    
    var total = document.querySelector(".total");
    total = (num1.textContent / num2.textContent) + num3.textContent;
    console.log("Retorno do total: " , total);
    
    return total;  
}
*/

/*----------------------------------------------------------------*/



var tabuadas = [0,1,2,3,4,5,6,7,8,9,10];

var selecionar = document.querySelector('#selecao-tabuada');

var options = document.querySelector('.tabuada');

 
for(var i=0; i < tabuadas.length;i++){
    
    var opcao = document.createElement('option');
    
    opcao.classList.add('tabuada'); 
    
    opcao.textContent = tabuadas[i];
    
    selecionar.appendChild(opcao);
    
}

selecionar.addEventListener("change", function(opcao){

    console.log("Clicou na opcao: ",opcao.textContent);
    return opcao;
});


