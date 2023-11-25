function login() {
    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulação de verificação do lado do servidor (PHP)
    // Neste exemplo, aceitamos qualquer combinação de usuário e senha
    var isCredentialsValid = true;

    // Exibir mensagem de erro se as credenciais forem inválidas
    var errorMessageElement = document.getElementById("error-message");
    if (!isCredentialsValid) {
        errorMessageElement.textContent = "Credenciais inválidas. Tente novamente.";
    } else {
        errorMessageElement.textContent = "";

        // Redirecionar ou executar ações adicionais após o login bem-sucedido
       alert("Login bem-sucedido! Redirecionando para a página principal...");
    }
    function redirecionarParaOutraPagina() {
        // Substitua 'outrapagina.html' pelo caminho da página para a qual deseja redirecionar
        window.location.href = 'outrapagina.html';
    }
}
