# Boas Práticas - Clínica Veterinária Frontend

Este documento apresenta as boas práticas a serem seguidas no desenvolvimento e manutenção do frontend da Clínica Veterinária. Seguir estas diretrizes garante um código consistente, fácil de manter e de alta qualidade.

## 📑 Índice

- [Organização e Estrutura de Código](#organização-e-estrutura-de-código)
- [Convenções de Nomenclatura](#convenções-de-nomenclatura)
- [Padrões de Documentação](#padrões-de-documentação)
- [Diretrizes de CSS/Estilo](#diretrizes-de-cssestilo)
- [Boas Práticas de JavaScript](#boas-práticas-de-javascript)
- [Considerações de Acessibilidade](#considerações-de-acessibilidade)
- [Fluxo de Trabalho Git](#fluxo-de-trabalho-git)

## Organização e Estrutura de Código

### Estrutura de Diretórios

- Mantenha a estrutura de diretórios conforme definido no projeto:
  - `/api`: Para chamadas ao backend organizadas por funcionalidade
  - `/assets`: Para recursos como CSS, JS e imagens
  - `/components`: Para componentes HTML reutilizáveis
  - `/pages`: Para páginas individuais do sistema
  - `/doc`: Para documentação do projeto

### Modularização

- **Separe responsabilidades**: Cada arquivo deve ter uma única responsabilidade bem definida
- **Reutilize componentes**: Crie componentes reutilizáveis para elementos que se repetem nas páginas
- **Mantenha arquivos pequenos**: Arquivos com mais de 300 linhas devem ser considerados para divisão

### Importações

- Organize as importações em seções lógicas (bibliotecas externas, componentes, utilitários)
- Mantenha tags script no final do body para melhorar o tempo de carregamento

## Convenções de Nomenclatura

### Arquivos

- **HTML**: Use nomes descritivos em kebab-case (ex: `login-form.html`, `pet-details.html`)
- **CSS**: Use nomes descritivos em kebab-case (ex: `main-styles.css`, `pet-card.css`)
- **JavaScript**: Use nomes descritivos em camelCase (ex: `authService.js`, `petController.js`)

### Classes e IDs HTML

- **Classes CSS**: Use kebab-case e nomes descritivos da funcionalidade (ex: `pet-card`, `user-avatar`)
- **IDs**: Use camelCase e seja específico (ex: `loginForm`, `petDetailsContainer`)
- Prefira classes para estilização e IDs para JavaScript/interatividade

### JavaScript

- **Variáveis e Funções**: Use camelCase (ex: `getUserData()`, `petName`)
- **Classes**: Use PascalCase (ex: `PetService`, `UserController`)
- **Constantes**: Use SNAKE_CASE_MAIÚSCULO (ex: `MAX_PETS_PER_USER`, `API_URL`)

## Padrões de Documentação

### Comentários de Código

- Use comentários para explicar "por quê", não "o quê" ou "como"
- Documente funções complexas com descrição, parâmetros e retorno:

```javascript
/**
 * Calcula a idade do pet em anos humanos
 * @param {number} petAge - Idade do pet em anos
 * @param {string} petType - Tipo de animal ('dog', 'cat', etc)
 * @returns {number} Idade equivalente em anos humanos
 */
function calculateHumanAge(petAge, petType) {
  // Implementação
}
```

### README e Documentação

- Mantenha o README.md atualizado com instruções de instalação e uso
- Documente APIs internas com exemplos de uso
- Atualize a documentação quando houver mudanças significativas

## Diretrizes de CSS/Estilo

### Uso do Bootstrap

- Utilize as classes do Bootstrap sempre que possível antes de criar estilos personalizados
- Para customizações:
  - Use variáveis do Bootstrap quando disponíveis
  - Sobrescreva apenas o necessário em arquivos CSS separados

### Organização de CSS

- Organize os estilos em ordem lógica:
  1. Posicionamento (`position`, `top`, `left`, etc)
  2. Box model (`display`, `width`, `height`, `margin`, `padding`)
  3. Tipografia (`font`, `line-height`, `text-align`)
  4. Visual (`color`, `background`, `border`, `box-shadow`)
  5. Outros (`transform`, `animation`, etc)

### Responsividade

- Desenvolva com abordagem mobile-first
- Utilize as classes responsivas do Bootstrap (`col-md-6`, `col-lg-4`, etc)
- Teste em múltiplos tamanhos de tela

## Boas Práticas de JavaScript

### Geral

- Prefira funções e variáveis com escopo limitado (`const`, `let`) em vez de globais
- Use operadores de desestruturação e spread para manipulação de objetos
- Evite código duplicado, prefira reutilizar funções

### jQuery

- Armazene seletores jQuery em variáveis quando reutilizados:

```javascript
const $loginForm = $('#loginForm');
const $submitButton = $loginForm.find('.submit-button');
```

- Use delegação de eventos para elementos dinâmicos:

```javascript
$('#petList').on('click', '.pet-item', function () {
  // Manipulador para itens que podem ser adicionados dinamicamente
});
```

- Encadeie métodos jQuery quando apropriado para código mais conciso

### AJAX e API

- Centralize chamadas API em arquivos dedicados por entidade (/api/pets.js, /api/users.js)
- Trate erros adequadamente usando promises ou try/catch
- Implemente indicadores de carregamento para operações assíncronas

## Considerações de Acessibilidade

### Semântica HTML

- Use elementos HTML semânticos apropriados (`<nav>`, `<header>`, `<main>`, `<footer>`, etc)
- Utilize `<button>` para elementos clicáveis, não `<div>` ou `<span>`
- Forneça textos alternativos para imagens (`alt="Descrição da imagem"`)

### Navegação e Interação

- Garanta navegação por teclado (tabulação lógica) entre elementos interativos
- Adicione atributos ARIA quando necessário (`aria-label`, `aria-expanded`, etc)
- Forneça feedback visual e textual para ações do usuário

### Contraste e Legibilidade

- Mantenha contraste adequado entre texto e fundo (mínimo 4.5:1 para texto normal)
- Use tamanhos de fonte legíveis (mínimo 16px para texto principal)
- Teste com ferramentas como Lighthouse ou WAVE

## Fluxo de Trabalho Git

### Branches

- **main/master**: Código em produção, estável
- **develop**: Branch de integração para features completas
- **feature/nome-da-feature**: Para desenvolvimento de novas funcionalidades
- **hotfix/nome-do-fix**: Para correções urgentes

### Commits

Siga o padrão de commits semânticos:

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

Onde `<tipo>` pode ser:

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Alteração em documentação
- **style**: Formatação, ponto-e-vírgula faltando, etc; sem alteração de código
- **refactor**: Refatoração de código
- **test**: Adição ou correção de testes
- **chore**: Atualização de tarefas, configurações, etc; sem alteração de código

Exemplos:

- `feat(pets): adiciona formulário de cadastro de pet`
- `fix(login): corrige validação de senha`
- `docs(readme): atualiza instruções de instalação`

### Pull Requests

- Mantenha PRs pequenos e focados em uma única funcionalidade
- Forneça descrição clara do que foi feito e por quê
- Solicite revisão de pelo menos um outro desenvolvedor
- Resolva conflitos antes de mesclar

---

Estas boas práticas devem ser seguidas por todos os membros da equipe para manter a consistência e qualidade do projeto. A documentação será atualizada conforme necessário para refletir mudanças nos padrões ou ferramentas utilizadas.
