function criarCookie(nome, valor, expira) { //pra criar um cookie, eu preciso saber o nome do cookie, o quê ele guarda, e quando o cookie irá se expirar
    let dtExpira = ""; //eu inicializo a data de vencimento com um valor vazio
    if (expira) { //se a data de expirar, foi passada: 
        dtExpira = "expires=" + expira + "; "; //ele deixa ela formatadinha bonitin
    }
    document.cookie = nome + "=" + encodeURIComponent(valor) + "; " + dtExpira + "path=/"; //formatei o arquivo do cookie passando as informações que ele deseja
}

function lerCookie(nome) { //ler os cookies bonitin
    let vnome = nome + "="; //iniciei o valor do nome já o formatando.
    let ca = document.cookie.split(";"); //aqui estou dizendo que quero que seja um array de cookies na váriavel ca
    for (var i = 0; i < ca.length; i++) { //um loop para capturar os cookies existentes
        var c = ca[i].trim(); //aqui ele retira o espaço em branco no final de cada string dos cookie
        if (c.indexOf(vnome) == 0) {
            return decodeURIComponent(c.substring(vnome.length)); //então ele está botando no espaço vázio que o trim tirou, o nome do cookie.
        }
    }
    return "";
}


window.onload = function() {
    verificarCookie();
};

function verificarCookie() { //verificar os cookies e já adiciona-los à página
    let username = lerCookie("username"); // inicializei a váriavel username do qual desejo usar no cookie (contexto de usuário da página)
    if (username !== "") { //caso o username for diferente de vazio
        alert("Bem-vindo novamente " + username); //aqui está o nome do menó sendo puxado graças ao cookie
    } else {
        username = prompt("Digite seu nome:", ""); //caso contrario: ele terá que dar o nome
        if (username !== "" && username !== null) { //caso o nome foi dado certin, ele irá dar a data de vencimento do cookie
            let expira = new Date(); //aqui ele puxa a data do pc
            expira.setFullYear(expira.getFullYear() + 10); //dei mais 10 anos de validade
            criarCookie("username", username, expira.toUTCString()); //o "toUTCString" ele pega a data e transforma em string formatada em UTC
        }
    }
}

