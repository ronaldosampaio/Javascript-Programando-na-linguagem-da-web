
/* Pegar o valor de input,
   Clicar no botão
   ficar vazio o input text
   Mostra o valor no span cópia
*/
var inputFrase = document.querySelector(".frase");
var botao = document.querySelector(".botao");
var copia = document.querySelector(".copia");

botao.addEventListener("click", botaoHandler);

function botaoHandler(){
    copia.textContent = inputFrase.value;
    inputFrase.value = "";
    console.log(copia);     
}


var form = document.querySelector('.adicionar-tarefa');
var botao2 = document.querySelector('#botao-adicionar');
var preencherLi = document.querySelector(".afazeres"); 
botao2.addEventListener("click", function(){
     event.preventDefault();
    //console.log(form.tarefa.value);
  
   
    //Código para adicionar na lista de tarefas
    
    
     //preencherLi = form.tarefa.value;
     console.log(preencherLi);
});

