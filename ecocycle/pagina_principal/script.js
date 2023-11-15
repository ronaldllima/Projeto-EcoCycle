// Atualize a função changeTab para carregar o conteúdo da página correspondente

function changeTab(tabId) {
    // Esconde todas as abas
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Carrega o conteúdo da página correspondente na aba selecionada
    if (tabId === 'inicio') {
        fetch('inicio.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('inicio').innerHTML = data;
                document.getElementById('inicio').classList.add('active');
            });
    } else if (tabId === 'agendamento') {
        fetch('agendamento.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('agendamento').innerHTML = data;
                document.getElementById('agendamento').classList.add('active');
            });
    } else if (tabId === 'educacional') {
        fetch('informacoes.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('educacional').innerHTML = data;
                document.getElementById('educacional').classList.add('active');
            });
    }else if (tabId === 'suporte') {
        fetch('suporte.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('suporte').innerHTML = data;
                document.getElementById('suporte').classList.add('active');
            });
    }  else {
        document.getElementById(tabId).classList.add('active');
    }

    window.onload = function () {
        loadContent('inicio.html', 'inicio');
    };
    
    // Função para carregar o conteúdo da página em uma determinada aba
    function loadContent(page, tabId) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById(tabId).innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', page, true);
        xhr.send();
    }

    // Atualiza a classe 'active' no menu
    var menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(function (item) {
        item.classList.remove('active');
    });

    document.querySelector('.menu li[data-tab="' + tabId + '"]').classList.add('active');
}
