//criação de váriaveis
inputEmail = document.getElementById("exampleInputEmail1");
inputPassword = document.getElementById("exampleInputPassword1");

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
    for (var i = 0; i < ca.length; i++) { // Itera pelos cookies.
        var c = ca[i].trim(); // Remove espaços em branco no início e no final da string.
        if (c.indexOf(vnome) == 0) {
            // Retorna o valor do cookie decodificado.
            return decodeURIComponent(c.substring(vnome.length));
        }
    }
    return ""; // Retorna uma string vazia se o cookie não for encontrado.
}

function verificarCookie() {
    // Verifica se o cookie de nome "username" existe e o utiliza.
    let email = lerCookie("email");
    let password = lerCookie("password");
    if (email !== "" || password !== "") { // Se o cookie já existe:
        alert("Bem-vindo novamente " + email); // Exibe uma mensagem de boas-vindas.
        alert("Confirmando sua senha: " + password);
    } else {
        // Se o cookie não existir, solicita o nome do usuário.
        email = inputEmail.value;
        password = inputPassword.value;
        if ((email !== "" && email !== null) && (password !== "" && password !== null)) { // Se um nome válido for fornecido:
            let expira = new Date(); // Obtém a data atual.
            expira.setFullYear(expira.getFullYear() + 10); // Define a expiração para 10 anos no futuro.
            criarCookie("email", email, expira.toUTCString()); // Cria o cookie com a data de expiração formatada.
            criarCookie("password", password, expira.toUTCString()); // Cria o cookie com a data de expiração formatada.
        }
    }
}
