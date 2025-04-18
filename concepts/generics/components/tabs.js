/**
 * Exibe as abas na interface e configura seus eventos
 * @param {Array} abas - Array de objetos contendo informações das abas
 */
export function showTabs(abas) {
  const tabsContent = `
		<div id="conteudo" class="container my-4">
			<ul class="nav nav-tabs" id="tabs-nav">
				${abas
          .map(
            (aba, index) => `
							<li class="nav-item">
								<button 
									class="nav-link ${index === 0 ? 'active' : ''}" 
									data-id="${aba.id}" 
									data-index="${index}">
									${aba.label}
								</button>
							</li>
						`
          )
          .join('')}
			</ul>
			<div id="area-troca" class="mt-4"></div>
		</div>
  `;

  document.getElementById('tabs').innerHTML = tabsContent;

  const buttons = document.querySelectorAll('#tabs-nav .nav-link');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', event => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      abas[index].callback();
    });
  });

  // Chama a primeira aba
  abas[0].callback();
}

/**
 * Troca de aba dinamicamente
 * @param {Event} event - Evento de clique
 * @param {string} abaId - ID da aba a ser ativada
 * @param {string} callbackName - Nome da função a ser chamada
 */
export function trocarAbaDinamica(event, abaId, callbackName) {
  document
    .querySelectorAll('.nav-link')
    .forEach(aba => aba.classList.remove('active'));

  if (event) {
    event.target.classList.add('active');
  } else {
    const btn = document.querySelector(`button[data-id="${abaId}"]`);
    if (btn) btn.classList.add('active');
  }

  const targetFunction = window[callbackName];
  if (typeof targetFunction === 'function') {
    targetFunction();
  } else {
    document.getElementById(
      'area-troca'
    ).innerHTML = `<p class="text-danger">Função "${callbackName}" não encontrada.</p>`;
  }
}
