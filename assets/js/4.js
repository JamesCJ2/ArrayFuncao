document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    let mensagem = document.getElementById('mensagem');
    if (login && senha) {
        mensagem.textContent = 'Login e senha válidos!';
    } else {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
    }
});