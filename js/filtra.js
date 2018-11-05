var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
   //console.log(this.value);
   var pacientes = document.querySelectorAll(".paciente");
   
    for(var i = 0; i < pacientes.length; i++){
        console.log(pacientes[i]);
    }
   if(this.value.length > 0){
       for(var i = 0; i < pacientes.length; i++){
           var paciente = pacientes[i];
           var tdNome = paciente.querySelector(".info-nome");
           var nome =  tdNome.textContent;
           console.log("variavel nome:",nome);
           var expresao = new RegExp(this.value, 'i');
           
           if(!expresao.test(nome)){
               paciente.classList.add("invisivel");
           }else{
               paciente.classList.remove("invisivel");
           }
       }
   }else{
        for(var i = 0; i < pacientes.length; i++){
           var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
   }

});