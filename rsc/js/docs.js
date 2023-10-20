document.addEventListener('DOMContentLoaded', function () {
  const hive = document.getElementById('hive');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  // Seleciona o botão de fechar pelo seu seletor CSS
  const closeButton = document.querySelector('.close');

  // Adiciona um evento de clique para o botão de fechar
  closeButton.addEventListener('click', function () {
    closeModal();
  });

  // Carrega o JSON de um arquivo externo
  fetch('rsc/json/colmeia.json')
    .then(response => response.json())
    .then(data => {
      for (const category in data) {
        const hiveCell = document.createElement('div');
        hiveCell.className = 'colmeia';
        hiveCell.textContent = category;

        hiveCell.addEventListener('click', function () {
          openModal(data[category]);
        });

        hive.appendChild(hiveCell);
      }
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

    function openModal(content) {
      modalContent.innerHTML = ''; // Limpa o conteúdo anterior
    
      const keys = Object.keys(content);
    
      keys.forEach((subcategory, subcategoryIndex) => {
        const subcategoryElem = document.createElement('div');
        subcategoryElem.className = 'subcategory';
        subcategoryElem.textContent = subcategory;
    
        modalContent.appendChild(subcategoryElem);
    
        const links = content[subcategory];
        const linkKeys = Object.keys(links);
    
        const itemsPerRow = 2; // Defina a quantidade de itens por linha
    
        linkKeys.forEach((key, index) => {
          const linkElem = document.createElement('a');
          linkElem.className = 'link';
          linkElem.textContent = key;
          linkElem.href = links[key];
          linkElem.target = '_blank';  // Abre o link em uma nova aba
    
          modalContent.appendChild(linkElem);
    
          // Adiciona uma linha de separação após a quantidade especificada de itens
          if ((index + 1) % itemsPerRow === 0 && index < linkKeys.length - 1) {
            const separatorElem = document.createElement('hr');
            modalContent.appendChild(separatorElem);
          }
        });
    
        // Adiciona uma linha de separação entre as subchaves, exceto para a última
        if (subcategoryIndex < keys.length - 1) {
          const separatorElem = document.createElement('hr');
          modalContent.appendChild(separatorElem);
        }
      });
    
      modal.style.display = 'flex';
    }

  document.addEventListener('keydown',function (event){
    if (event.key === 'Escape') {
        closeModal();
    }
});

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
});