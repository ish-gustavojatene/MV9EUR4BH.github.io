  fetch('matriz.csv')
  .then(response => response.text())
  .then(csvData => {
    const linhas = csvData.split('\n');
    const numLinhas = linhas.length;
    const numCol = linhas[0].split(',').length;

    const links = [
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Altera%C3%A7%C3%A3o%20em%20atalhos%20para%20persist%C3%AAncia/CTI%20Purple%20Team%20-%20Altera%C3%A7%C3%A3o%20em%20atalhos%20para%20persist%C3%AAncia.md', name: 'T1547.009' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Archive%20via%20Utility/CTI%20Purple%20Team%20-%20Archive%20via%20Utility.md', name: 'T1560.001' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20DLL%20Side-Loading/CTI%20Purple%20Team%20-%20DLL%20Side-Loading.md', name: 'T1574.002' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Escala%C3%A7%C3%A3o%20de%20Privil%C3%A9gios%20atrav%C3%A9s%20de%20servi%C3%A7os%20do%20Windows/CTI%20Purple%20Team%20-%20Escala%C3%A7%C3%A3o%20de%20Privil%C3%A9gios%20atrav%C3%A9s%20de%20servi%C3%A7os%20do%20Windows.md', name: 'T1543.003' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Indirect%20Command%20Execution/CTI%20Purple%20Team%20-%20Indirect%20Command%20Execution.md', name: 'T1202' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Movimenta%C3%A7%C3%A3o%20lateral%20atrav%C3%A9s%20de%20objeto%20DCOM/CTI%20Purple%20Team%20-%20Movimenta%C3%A7%C3%A3o%20lateral%20atrav%C3%A9s%20de%20objeto%20DCOM.md', name: 'T1021.003' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI%20Purple%20Team%20-%20Netsh%20Helper%20DLL/CTI%20Purple%20Team%20-%20Netsh%20Helper%20DLL.md', name: 'T1546.007' },
      { url: 'https://github.com/ish-cti-purple/CTI-PurpleTeam/blob/main/Pesquisas/Gustavo_Jatene/CTI-Purple-Team-Exfiltra%C3%A7%C3%A3o-de-arquivos-para-servi%C3%A7os-cloud/CTI%20Purple%20Team%20-%20Exfiltra%C3%A7%C3%A3o%20de%20arquivos%20para%20servi%C3%A7os%20cloud.md', name: 'T1567.002' },
      
      // Adicione quantos links e nomes forem necessários
    ];
    //document.getElementById('paleta').style.color = "#a054ac";
    const matrizBody = document.querySelector('#matriz tbody');
    for (let i = 0; i < numLinhas; i++) {
      const linha = document.createElement('tr');
      for (let j = 0; j < numCol; j++) {
        const celula = document.createElement('td');
        const celulaValor = linhas[i].split(',')[j];
        
        const pesquisaUrl = links.find(link => link.url === celulaValor);
        if (pesquisaUrl) {
          const link = document.createElement('a');
          link.href = pesquisaUrl.url;
          link.textContent = pesquisaUrl.name;
          celula.appendChild(link);
        } else {
          //celula.textContent = celulaValor;
          //celula.style.display = 'none';
          celula.textContent = '';
          celula.bgColor = '#540774';

        }
        
        linha.appendChild(celula);
      }
      matrizBody.appendChild(linha);
    }
    document.addEventListener('DOMContentLoaded', () => {
      const header = document.querySelector('.header');
      const table = document.querySelector('.table');
      
      header.addEventListener('click', () => {
        table.classList.toggle('hidden');
      });
    });




  })
  .catch(error => console.log(error));

/*fetch('matriz.csv')
.then(response => response.text())
.then(csvData => {
  const linhas = csvData.split('\n');
  const numLinhas = linhas.length;
  const numCol = linhas[0].split(',').length;

  const matrizBody = document.querySelector('#matriz tbody');
  for (let i = 0; i < numLinhas; i++) {
    const linha = document.createElement('tr');
    for (let j = 0; j < numCol; j++) {
      const celula = document.createElement('td');
      celula.textContent = linhas[i].split(',')[j];
      linha.appendChild(celula);
    }
    matrizBody.appendChild(linha);
  }
})
.catch(error => console.log(error));*/  