// Declaração de variáveis
const inputEmail = document.getElementById("exampleInputEmail1");
const inputPassword = document.getElementById("exampleInputPassword1");

function criarCookie(nome, valor, expira) {
    // Cria um cookie com o nome, valor e data de expiração fornecidos.
    let dtExpira = ""; // Inicializa a data de expiração com um valor vazio.
    if (expira) { // Se a data de expiração for fornecida:
        dtExpira = "expires=" + expira + "; "; // Formata a data de expiração.
    }
    // Cria o cookie com o nome, valor e a data de expiração formatada, se fornecida.
    document.cookie = nome + "=" + encodeURIComponent(valor) + "; " + dtExpira + "path=/";
}

function lerCookie(nome) {
    // Lê o valor do cookie com o nome fornecido.
    let vnome = nome + "="; // Formata o nome do cookie.
    let ca = document.cookie.split(";"); // Divide os cookies em um array.
    for (let i = 0; i < ca.length; i++) { // Itera pelos cookies.
        let c = ca[i].trim(); // Remove espaços em branco no início e no final da string.
        if (c.indexOf(vnome) === 0) {
            // Retorna o valor do cookie decodificado.
            return decodeURIComponent(c.substring(vnome.length));
        }
    }
    return ""; // Retorna uma string vazia se o cookie não for encontrado.
}

function verificarCookie() {
    // Verifica se os cookies "email" e "password" existem e os utiliza.
    let email = lerCookie("email");
    let password = lerCookie("password");

    if (email !== "" && password !== "") { // Se ambos os cookies existirem:
        alert("Bem-vindo novamente " + email); // Exibe uma mensagem de boas-vindas.
        alert("Confirmando sua senha: " + password); // Exibe a senha (somente para testes).
    }
}

document.querySelector("form").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregamento da página.
    let email = inputEmail.value;
    let password = inputPassword.value;

    if (email !== "" && password !== "") { // Se e-mail e senha válidos forem fornecidos:
        let expira = new Date(); // Obtém a data atual.
        expira.setFullYear(expira.getFullYear() + 10); // Define a expiração para 10 anos no futuro.
        criarCookie("email", email, expira.toUTCString()); // Cria o cookie com o e-mail.
        criarCookie("password", password, expira.toUTCString()); // Cria o cookie com a senha.
        alert("Login realizado com sucesso!"); // Mensagem de sucesso.
    } else {
        alert("Por favor, preencha ambos os campos."); // Mensagem de erro.
    }
}
