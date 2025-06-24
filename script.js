//Exercício 1) Validação de E-mail em Formulário de Cadastro
const emailsCadastrados = ["erikborgesofficial@gmail.com", "erikbaraujo013@gmail.com"];
const formulario = document.getElementById("form-cadastro-email");
const feedback = document.getElementById("email-feedback");

async function verificarEmail(emailDigitado, emailsCadastrados) {
    return new Promise((resolve, reject) => {
        if (emailsCadastrados.includes(emailDigitado)) {
            resolve("Login realizado com sucesso!");
        } else {
            reject("Email não cadastrado.")
        }
    })
}
    const inputEmail = document.getElementById("email");
formulario.addEventListener("submit", async(evento) => {
    evento.preventDefault();
    const emailDigitado = inputEmail.value;
    if (emailDigitado) {
        try {
            const login = await verificarEmail(emailDigitado, emailsCadastrados);
            feedback.innerText = login;
            inputEmail.value = "";
        } catch (error) {
            console.error("Erro ao realizar login. Tente novamente mais tarde.")
            inputEmail.value = "";
            feedback.innerText = "Email não encontrado!"
        }
    }
})


//Exercício 2) Validação de Nome de Usuário em Plataforma de Jogos
const formularioNomeUsuario = document.getElementById("form-cadastro-usuario");
const inputNomeUsuario = document.getElementById("username");
const usuarioFeedbeck = document.getElementById("username-feedback");
const usuariosCadastrados = ["Erik", "Jaine", "Amanda", "Fabiana"];

async function verificarNomeDoUsuario(usuariosCadastrados, nomeDigitado) {
    return new Promise((resolve, reject) => {
        if (usuariosCadastrados.includes(nomeDigitado)) {
            reject("Usuário não disponível. Escolha outro nome.");
        } else {
            resolve("Nome do usuário está disponível.");
        }
    })
}

formularioNomeUsuario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nomeDigitado = inputNomeUsuario.value;
    if (nomeDigitado) {
        try {
            const usuarioDisponivel = await verificarNomeDoUsuario(usuariosCadastrados, nomeDigitado);
            usuarioFeedbeck.innerText = usuarioDisponivel;
            inputNomeUsuario.value = "";
            return;
        } catch (error) {
            console.error("Erro ao tentar buscar usuários:"+ error);
            usuarioFeedbeck.innerText = error;
            inputNomeUsuario.value = "";
            return;
        }
        
    }
} )



//Exercício 3) Capturando dados do formulário e simulando envio para o banco de dados
const formularioExercicio3 = document.getElementById("form-projeto");
const nomeExercicio3 = document.getElementById("projectName");
const descricaoExercicio3 = document.getElementById("projectDescription");
const tagsSeparadasPorVirgula = document.getElementById("projectTags");
const botaoPublicarExercicio3 = document.getElementById("btn-publicar");
const feedbackExercicio3 = document.getElementById("db-feedback");



async function cadastrarProjeto(dados) {
    return new Promise((resolve, reject) => {
        if (dados) {
            setTimeout(() => {
                resolve("Projeto cadastrado com sucesso");
            }, 2000);
            
        } else {
            reject("Erro ao cadastrar projeto");
        }
    })
}

botaoPublicarExercicio3.addEventListener("click", async(evento) => {
    evento.preventDefault();
    const dados = {
    nome: nomeExercicio3.value,
    descricao: descricaoExercicio3.value,
    tags: tagsSeparadasPorVirgula.value
}
    if (dados.nome && dados.descricao && dados.tags) {
        try {
            const resultado = await cadastrarProjeto(dados);
            feedbackExercicio3.innerText = resultado;
        } catch (error) {
            feedbackExercicio3.innerText = error;
        }
        
    } else {
        feedbackExercicio3.innerText = "Por favor, preencha os campos corretamente."
    }
})
//Exercício 4) Enviando feedback do usuário via formulário


//Exercício 5) Simulando envio de formulário para um backend