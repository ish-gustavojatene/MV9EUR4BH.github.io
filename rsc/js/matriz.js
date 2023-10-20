document.addEventListener("DOMContentLoaded", function () {
    // Carregar o JSON
    fetch('rsc/json/matriz.json')
        .then(response => response.json())
        .then(data => {
            displayMatrix(data);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
    document.addEventListener('keydown',function (event){
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

function displayMatrix(matriz) {
    const matrixContainer = document.getElementById('matrix-container');
    const tabela = createTable(matriz);
    matrixContainer.appendChild(tabela);
}

function createTable(matriz) {
    const table = document.createElement('table');

    // Adicionar cabeçalho
    const headerLinha = table.insertRow();
    const taticas = Object.keys(matriz);

    taticas.forEach(categoria => {
        const headerCelula = headerLinha.insertCell();
        headerCelula.textContent = categoria;
    });

    // Adicionar conteúdo
    let maxLinhas = 0;

    taticas.forEach(categoria => {
        const tecnica = matriz[categoria] ? Object.keys(matriz[categoria]) : [];
        maxLinhas = Math.max(maxLinhas, tecnica.length);
    });

    for (let linhaIndex = 0; linhaIndex < maxLinhas; linhaIndex++) {
        const linha = table.insertRow();

        taticas.forEach(categoria => {
            const tecnica = matriz[categoria] ? Object.keys(matriz[categoria]) : [];

            if (linhaIndex < tecnica.length) {
                const technique = tecnica[linhaIndex];
                const conteudo = matriz[categoria][technique];
                const cell = linha.insertCell();

                // Adicionar nome da técnica
                const techniqueName = document.createElement('div');
                techniqueName.textContent = technique;
                cell.appendChild(techniqueName);

                // Adicionar botão "Ver Detalhes"
                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'Ver Detalhes';

                // Adicionar evento de clique
                detailsButton.addEventListener('click', () => {
                    // Exibir modal com detalhes
                    openModal(conteudo);
                });

                cell.appendChild(detailsButton);
            } else {
                // Adicionar célula vazia para categorias que não têm técnica nesse índice
                const celulaVazia = linha.insertCell();
                celulaVazia.textContent = '';
            }
        });
    }

    return table;
}

function openModal(conteudo) {
    const modal = document.getElementById('modal');
    const detailsList = document.getElementById('details-list');

    // Limpar conteúdo anterior
    detailsList.innerHTML = '';

    // Criar lista para exibir detalhes
    const list = document.createElement('ul');

    // Adicionar itens da lista com base no conteúdo
    let contador = 0;
    for (const key in conteudo) {
        const listItem = document.createElement('li');

        // Verificar se o valor é uma string (pode ser um link)
        if (typeof conteudo[key] === 'string') {
            // Se for um link, criar um elemento de âncora
            const link = document.createElement('a');
            link.href = conteudo[key];
            link.target = '_blank'; // Abrir em uma nova aba/janela
            link.textContent = key;

            // Adicionar o link ao item da lista
            listItem.appendChild(link);
        } else {
            // Se não for uma string, apenas adicionar o texto
            listItem.textContent = `${key}: ${conteudo[key]}`;
        }

        // Adicionar o item à lista
        list.appendChild(listItem);

        // Incrementar o contador de itens
        contador++;

        // Adicionar uma linha após cada segundo item
        if (contador % 2 === 0 && contador !== 0) {
            const line = document.createElement('hr');
            list.appendChild(line);
        }
    }

    // Adicionar lista ao modal
    detailsList.appendChild(list);

    // Exibir modal
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

  // Fecha o modal se o usuário clicar fora do conteúdo
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };