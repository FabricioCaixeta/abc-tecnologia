// JS PURAO (VANILLA JAVASCRIPT)
// const titulo = document.querySelector("h1");
// titulo.style.color = "blue"
// titulo.textContent = "Relação de Candidatos"


// usando jQuery
const titulo = $("h1");
titulo.hide().fadeIn(5000);
titulo.css("color", "blue");
titulo.text("Relação de Candidados");

// escript para o carregamento de candidatos
const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function (){
    // Técnica Ajax de comunicação
    $.ajax({
        url: "http://localhost:3000/candidatos",
        dataType:"json",
        success: function(resposta){
            //Garantindo que a lista sempre inicie vazia a cada click
            lista.html("");
            
        // Loop (laço de repetição)
        $.each(resposta, function (indice, conteudo){
            console.log(indice);
            console.log(conteudo);

            lista.append(
                `<li class="list-group-item">
                ${conteudo.nome}
                </li>`
    
            ).hide().slideDfdfrown();
        });
        }
    });

});
