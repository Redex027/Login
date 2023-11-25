<?php
// Este é um exemplo simples e inseguro para fins educacionais.
// Em um ambiente de produção, você deve usar autenticação segura e hashes de senha adequados.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verificação de credenciais simples (aceitando qualquer combinação)
    $isCredentialsValid = true;

    if ($isCredentialsValid) {
        // Aqui você pode redirecionar para a página principal ou executar ações adicionais
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Credenciais inválidas. Tente novamente."]);
    }
}
?>
