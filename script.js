//Implementando tratamento de dados. Exercício 1
let bancoDeDados = [];


function validacaoDeDados() {
    const btnLiberarProjeto = document.getElementById("btn-validar");
    const mensagemDeValidacao = document.getElementById("resultado-1");
btnLiberarProjeto.addEventListener("click", (evento) => {
    evento.preventDefault();
    const inputNomeDoProjeto = document.getElementById("proj-nome");
    const inputDescricaoDoProjeto = document.getElementById("proj-descricao");
    const inputTagsDoProjeto = document.getElementById("proj-tags");
    const textoDigitado = inputTagsDoProjeto.value;
    const tagsArray = textoDigitado.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);
    if (inputNomeDoProjeto.value && inputDescricaoDoProjeto.value && inputTagsDoProjeto.value) {
        const novoProjeto = {
            nome:inputNomeDoProjeto.value,
            descricao: inputDescricaoDoProjeto.value,
            tags: tagsArray
        }

        bancoDeDados.push(novoProjeto);
        mensagemDeValidacao.innerText = "Projeto publicado com sucesso!";
        inputNomeDoProjeto.value = "";
        inputDescricaoDoProjeto.value = "";
        inputTagsDoProjeto.value = "";
        console.log(bancoDeDados);
    } else {
        mensagemDeValidacao.innerText = "Preencha os campos corretamente";
    }
    
})
}


//Filtrar os projetos por tags. Exercício 2

function filtrarProjetos() {
const btnBuscarTagsFiltradas = document.getElementById("btn-buscar");
const containerParaExibirProjetos = document.getElementById("resultado-2");

btnBuscarTagsFiltradas.addEventListener("click", (evento) => {
    evento.preventDefault();
    const termoBuscado = document.getElementById("busca-tag").value.trim();
    const projetosFiltradosPorTags = bancoDeDados.filter(projeto => projeto.tags.includes(termoBuscado));
    if (projetosFiltradosPorTags.length === 0) {
        console.log("Projeto não encontrado!");
        document.getElementById("busca-tag").value = "";
        return;
    }
    try {
        projetosFiltradosPorTags.forEach(projeto => {
        const nomeDoProjeto = document.createElement("h3");
        nomeDoProjeto.innerText = projeto.nome;
        const descricaoDoProjeto = document.createElement("p");
        descricaoDoProjeto.innerText = projeto.descricao;
        const tagsDoProjeto = document.createElement("p");
        projeto.tags.forEach(tag => {
            tagsDoProjeto.innerText += ` ${tag}`;
        })
        containerParaExibirProjetos.appendChild(nomeDoProjeto);
        containerParaExibirProjetos.appendChild(descricaoDoProjeto);
        containerParaExibirProjetos.appendChild(tagsDoProjeto);

        })
    } catch (error) {
        console.error(error);
    }
    console.log(projetosFiltradosPorTags);
    document.getElementById("busca-tag").value = "";
    
})
}
//Exercício 3) Limpando formulário
function limparFormulario() {
    const btnLimpar = document.getElementById("btn-limpar-form");
    btnLimpar.addEventListener("click", (evento) => {
        evento.preventDefault();
        document.getElementById("nome").value = "";
        document.getElementById("descricao").value = "";
        document.getElementById("imagem").value = "";
        document.getElementById("imagem-preview").src = "/assets/batata-frita.webp";
        document.getElementById("tags").value = "";
    })
}

//Exercício 4) Exibindo detalhes de um pedido
const pedidoValido = {
    id: 135,
    nome: "Erik Borges",
    itens: [
        {nome: "pizza", quantidade: 1},
        {nome: "Refrigrerante", quantidade: 2}
    ],
    total: 45.50
}

const pedidoInvalido = {
    id: 432
}

let resultadoDoPedido = document.getElementById("resultado-4");

function exibirDetalhesDoPedido(pedido) {
    try {
    let detalhes = `<strong>Numero do pedido: ${pedido.id}</strong><br>
    <h2>Cliente: ${pedido.nome}</h2><br>
    `;
    pedido.itens.forEach(item => {
        detalhes += `Itens: ${item.nome}, Quantidade: ${item.quantidade}<br>`;
    });
    detalhes += `Total: R$ ${pedido.total.toFixed(2)}`;
    resultadoDoPedido.innerHTML = detalhes;
    } catch (error) {
        resultadoDoPedido.innerHTML = `<strong>Erro<strong>: <p>Falha ao exibir o pedido. Veja se os dados estão completos.</p>`
    }
}

document.getElementById("btn-pedido-valido").addEventListener("click", (evento) => {
    exibirDetalhesDoPedido(pedidoValido);
});

document.getElementById("btn-pedido-invalido").addEventListener("click", (evento) => {
    exibirDetalhesDoPedido(pedidoInvalido);
})

validacaoDeDados();
filtrarProjetos();
limparFormulario();
