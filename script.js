//Implementando tratamento de dados

const btnLiberarProjeto = document.getElementById("btn-validar");
const mensagemDeValidacao = document.getElementById("resultado-1");

btnLiberarProjeto.addEventListener("click", (evento) => {
    evento.preventDefault();
    const inputNomeDoProjeto = document.getElementById("proj-nome").value;
    const inputDescricaoDoProjeto = document.getElementById("proj-descricao").value;
    const inputTagsDoProjeto = document.getElementById("proj-tags").value;
    if (inputNomeDoProjeto && inputDescricaoDoProjeto && inputTagsDoProjeto) {
        mensagemDeValidacao.innerText = "Projeto publicado com sucesso!";
    } else {
        mensagemDeValidacao.innerText = "Preencha os campos corretamente";
    }
    
})

//Formulário de busca

