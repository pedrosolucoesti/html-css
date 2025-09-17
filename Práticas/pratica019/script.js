function main() {

    const opcoes = document.querySelectorAll('#experiencias, #servicos, #acomodacoes');
      // Percorre todas as opções
  opcoes.forEach(opcao => {
    opcao.addEventListener('click', () => {
      // Remove a classe 'principal' de todas as opções
      opcoes.forEach(o => o.classList.remove('principal'));

      // Adiciona a classe 'principal' somente na clicada
      opcao.classList.add('principal');
    });
  });
}

// Executa a função quando a página carregar
window.onload = main

