# Clínica Veterinária - Frontend

Este é o front-end para a aplicação de gerenciamento de uma clínica veterinária. Ele utiliza **HTML, CSS (Bootstrap), JavaScript e jQuery** para criar um sistema funcional e organizado.

## 📂 Estrutura do Projeto 1

```plaintext
/meu-projeto
│── /api                  →🔹Chamadas ao backend organizadas por funcionalidade
│   ├── auth.js             → Login, logout, recuperação de senha
│   ├── users.js            → Cadastro de usuários e perfis
│   ├── pets.js             → Cadastro e gerenciamento de pets
│   ├── consultas.js        → Agendamentos, diagnósticos
│   ├── receitas.js         → Controle de medicamentos e prescrições
│── /assets
│   ├── /css              →🔹Arquivos de estilo (Bootstrap, estilos personalizados)
│   ├── /js                 → Arquivos JavaScript
│   │   ├── main.js
│   │   ├── navbar.js
│   │   ├── router.js
│   │   ├── jquery.min.js
│   ├── /img                → Imagens do sistema
│── /components           →🔹Componentes reutilizáveis
│   ├── navbar.html
│   ├── footer.html
│── /pages                →🔹Páginas individuais do sistema
│   ├── home.html
│   ├── login.html
│   ├── dashboard.html
│── index.html
```

## 🚀 Tecnologias Utilizadas

- **HTML5** para estruturação das páginas
- **CSS3 + Bootstrap** para estilos e responsividade
- **JavaScript + jQuery** para interatividade e manipulação do DOM
- **LocalStorage** para autenticação temporária sem backend

## 📌 Funcionalidades Implementadas

✔ Tela de **Login e Logout**

✔ Cadastro e gerenciamento de **Usuários, Pets, Consultas e Receitas**

✔ **Dashboard** com visão geral do atendimento

✔ Uso de **AJAX** para comunicação assíncrona com a API

✔ Estrutura modular para fácil manutenção

## 🔧 Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/Pokernol/clinica-veterinaria.git
   ```

2. Baixe o arquivo **jQuery** e coloque na pasta **assets/js**

   [https://code.jquery.com/jquery-3.7.1.min.js](https://code.jquery.com/jquery-3.7.1.min.js)

3. Baixe o arquivo **Bootstrap** e coloque na pasta **assets/css** e no **assets/js**: Diferente do **jQuery**, o **Bootstrap** possui 2 arquivos, são eles o `bootstrap.min.css` e o `bootstrap.bundle.min.js`.

   [https://getbootstrap.com/docs/5.3/getting-started/download/](https://getbootstrap.com/docs/5.3/getting-started/download/)

4. Abra o arquivo `index.html` em um navegador
5. Certifique-se de que os arquivos **CSS** e **JS** estão carregando corretamente

### 📡 Servidor de Desenvolvimento (Opcional)

Como alternativa para rodar o projeto, você pode utilizar o servidor HTTP embutido do Python:

**Pré-requisitos:**

- Python 3.7 ou superior instalado

**Passos:**

1. Abra o terminal na pasta do projeto
2. Execute o comando:

   ```bash
   python -m http.server 3000 --bind 127.0.0.1
   ```

3. Acesse <http://localhost:3000> no seu navegador
4. Para parar o servidor, pressione Ctrl+C no terminal

Esta é uma alternativa caso não queira abrir o arquivo index.html diretamente ou usar o Live Server do VS Code. Além disso, rodando com o python ele oferece:

- Logs de acesso para debug
- Porta configurável
- Não requer extensões do VS Code

## 📌 Próximos Passos

- Implementar o **backend** em Java
- Melhorar a segurança na autenticação
- Adicionar novas funcionalidades conforme necessidade

## Contribuição 🤝

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Commit suas mudanças (git commit -am 'Adiciona nova feature').
4. Faça o push para a branch (git push origin feature/nova-feature).
5. Abra um Pull Request.

## Autor

<div align="center">
  <a href="https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100011077?v=4" width="100px;" alt="foto do autor"/>
  </a>

[![Linkedin Badge linktree](https://img.shields.io/badge/-Leonardo_Vinícius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/)](https://www.linkedin.com/in/leonardo-vin%C3%ADcius25/)
[![Linkedin Badge linkedin](https://img.shields.io/badge/-Leonardo_Vinícius-39E09B?style=flat-square&logo=linktree&logoColor=white&link=https://linktr.ee/pokernol)](https://linktr.ee/pokernol)

</div>

## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de meu Email:

[![Gmail Badge](https://img.shields.io/badge/-Lenardopoke25@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leonardopoke25.com)](mailto:leonardopoke25.com)
