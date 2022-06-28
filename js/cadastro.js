const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    //montando um bjeto com os dados do form
    let dados = {
        nome : campoNome.value,
        data : campoData.value,
        telefone : campoTelefone.value,
        email : campoEmail.value,
        vaga: campoVaga.selectedOptions[0].textContent
    };
    console.log(dados);

    // Tecnica de transmissao/ comunicacao AJAX
    fetch("http://localhost:3000/candidatos", {
        //Método Post: indica que os dados serão enviados
        method: "POST",

        //"Limpeza/conversão" do objeto JS para JSON
        body: JSON.stringify(dados),

        //Cabeçalho da mensagem (importante para API)
        headers: {"Content-type" : "application/json"}
    })
    .then (resposta => resposta.json() )
    .then (dados => {
        alert("Dados enviados com sucesso!");

    });
});