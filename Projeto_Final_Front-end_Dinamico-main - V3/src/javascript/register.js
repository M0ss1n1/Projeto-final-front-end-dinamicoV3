document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifique se os campos foram preenchidos
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verifique se o nome de usuário já existe no localStorage
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username]) {
            alert('Nome de usuário já existe. Escolha outro.');
            return;
        }

        // Registre o usuário no localStorage
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro bem-sucedido. Você pode fazer login agora.');
        window.location.href = 'login.html';
    });
});
