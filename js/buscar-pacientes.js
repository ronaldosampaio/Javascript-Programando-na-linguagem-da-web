var buscarPacientes = document.querySelector("#buscar-paciente");

buscarPacientes.addEventListener("click", function(){
    
     //var xhr = new XMLHttpRequest(); para fazer a requisição em javascript
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        
        var pacientes = JSON.parse(resposta);
        
        for(var i=0; i < pacientes.length; i++){
            adicionaPacienteNaTabela(pacientes[i]);
        } 
        
        /*
        //Esta é outra forma
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
        */
        
    });
    xhr.send();  
});

