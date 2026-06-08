document.getElementById('btnEntrar').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    
    // Remove classes anteriores
    mensagem.classList.remove('sucesso', 'erro');
    
    // Validação de campos vazios
    if (usuario === '' || senha === '') {
        mensagem.textContent = 'Preencha todos os campos!';
        mensagem.classList.add('erro');
        return;
    }
    
    // Validação de credenciais (usuário: admin, senha: 1234)
    if (usuario === 'admin' && senha === '1234') {
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.classList.add('sucesso');
    } else {
        mensagem.textContent = 'Usuário ou senha inválidos!';
        mensagem.classList.add('erro');
    }
});
