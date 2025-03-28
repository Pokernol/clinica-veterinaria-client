# Clínica Veterinária - Frontend

Este é o front-end para a aplicação de gerenciamento de uma clínica veterinária. Ele utiliza **HTML, CSS (Bootstrap), JavaScript e jQuery** para criar um sistema funcional e organizado.

## 📂 Estrutura do Projeto

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

2. Abra o arquivo `index.html` em um navegador
3. Certifique-se de que os arquivos **CSS** e **JS** estão carregando corretamente

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
