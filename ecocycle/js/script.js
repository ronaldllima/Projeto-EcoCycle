document.addEventListener("DOMContentLoaded", function () {
    // Obter referências aos elementos do DOM
    const contentContainer = document.getElementById("content");
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Adicionar manipuladores de eventos para as abas do menu
    document.querySelectorAll("nav ul a").forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const page = event.target.getAttribute("href").substring(1) + ".html";
            carregarConteudo(page);
        });
    });

    // Adicionar manipuladores de eventos para os botões de login/logout (exemplo)
    loginBtn.addEventListener("click", function () {
        alert("Função de Login: Implemente conforme necessário.");
    });

    logoutBtn.addEventListener("click", function () {
        alert("Função de Logout: Implemente conforme necessário.");
    });

    // Função para carregar dinamicamente o conteúdo das páginas
    function carregarConteudo(page) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                contentContainer.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "pages/" + page, true);
        xhttp.send();
    }
});
