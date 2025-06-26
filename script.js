const inputNome = document.getElementById("nome");
const inputDescricao = document.getElementById("descricao");
const inputTags = document.getElementById("tags");
const listaParaExibirTags = document.getElementById("lista-de-tags");
const mensagemDoFormulario = document.getElementById("mensagem-form");
const btnSalvar = document.getElementById("btn-salvar");
const btnLimpar = document.getElementById("btn-limpar");



inputTags.addEventListener("keypress", (evento) => {
    
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tag = document.createElement("li");
        tag.classList.add("tag");
        const tagTexto = document.createElement("p");
        tagTexto.innerText = inputTags.value;
        tag.appendChild(tagTexto);
        listaParaExibirTags.appendChild(tag);
        inputTags.value = "";
    }
})
const listaProjetos = document.getElementById("lista-projetos");

btnSalvar.addEventListener("click", async(evento) => {
    evento.preventDefault();
    const nome = inputNome.value;
    const descricao = inputDescricao.value;
    const tag = inputTags.value;
    const quantidadeDeTags = listaParaExibirTags.querySelectorAll(".tag");
    if (nome === "" || descricao === "" || quantidadeDeTags.length === 0 ) {
        mensagemDoFormulario.textContent = "Por favor, preencha os campos corretamente.";
        setTimeout(() => {
            mensagemDoFormulario.innerText = "";
        }, 2000);
        return;
    }
    btnSalvar.innerText = "Cadastrando..."
    btnSalvar.disabled = true;
    try {
        setTimeout(() => {
            listaProjetos.innerHTML = `<div class="projeto-card">
                        <h4 id="titulo-projeto-publicado">${nome}</h4>
                        <p id="descricao-projeto-publicado">${descricao}</p>
                        <div class="tags-container">
                            <span class="tag">html</span>
                            <span class="tag">css</span>
                        </div>
                    </div>`
                    quantidadeDeTags.forEach(doc => {
                        const tagCriada = document.createElement("span");
                        tagCriada.innerText = doc;
                        const containerTags = document.querySelector(".tags-container");
                        containerTags.appendChild(tagCriada);
                    });
            mensagemDoFormulario.innerText = "Cadastrado com sucesso!"
        }, 2000);
    } catch (error) {
        console.error(error);
    } finally {
        btnSalvar.innerText = "Salvar Projeto";
        btnSalvar.disabled = false;
        inputNome.value = "";
        inputDescricao.value = "";
        inputTags.value = "";
        listaParaExibirTags.innerHTML = "";
    }

})

