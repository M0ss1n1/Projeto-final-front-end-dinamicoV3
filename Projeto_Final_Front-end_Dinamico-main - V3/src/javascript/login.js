document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifique se os campos foram preenchidos
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Verifique se as credenciais correspondem às armazenadas no localStorage
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username] === password) {
            alert('Login bem-sucedido.');
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'user.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
});
