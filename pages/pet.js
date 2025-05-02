import { showTabs } from '../concepts/generics/components/tabs.js';
import {
  mostrarPets,
  mostrarFormulario,
} from '../concepts/pet/contexts/controlePets.js';

class Pets extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    document.addEventListener('DOMContentLoaded', function () {
      const abas = [
        { id: 'lista', label: '🐶 Pets Cadastrados', callback: mostrarPets },
        {
          id: 'cadastro',
          label: '➕ Cadastrar Pet',
          callback: mostrarFormulario,
        },
      ];

      showTabs(abas);
    });

    const petsHTML = `
      <main class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center">Controle de Pets</h1>
            <p class="text-center">
              Aqui você pode cadastrar, visualizar e gerenciar os pets da sua
              conta.
              <br />
              Utilize as abas abaixo para navegar entre as opções disponíveis.
            </p>
          </div>
          <div id="tabs"></div>
        </div>
      </main>
    `;

    this.innerHTML = petsHTML;
  }
}

customElements.define('pets-page', Pets);
