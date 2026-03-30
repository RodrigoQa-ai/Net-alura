# 🎬 Clone Netflix - Projeto Front-end com foco em QA

## 📌 Sobre o projeto

Este projeto foi desenvolvido durante a **Imersão Front-end da Alura**, utilizando o **VS Code** com apoio de ferramentas de Inteligência Artificial.

A proposta foi criar uma interface inspirada na Netflix, com catálogo de conteúdos, navegação entre páginas e organização visual moderna.

🔗 **Acesse o projeto online:**
https://rodrigoqa-ai.github.io/Net-alura/catalogo/catalogo.html

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* Git e GitHub
* VS Code

---

## 🎯 Objetivo

Além do aprendizado em front-end, este projeto também foi utilizado como prática para desenvolvimento de habilidades em **Qualidade de Software (QA)**, incluindo identificação e correção de erros em ambiente real de deploy.

---

## 🐞 Bug encontrado (experiência prática de QA)

Durante o deploy utilizando **GitHub Pages**, foi identificado um problema onde:

❌ As imagens não eram exibidas no site publicado
✔️ Funcionavam normalmente no ambiente local (VS Code)

### 🔍 Diagnóstico

O erro estava relacionado ao uso incorreto de caminhos absolutos nas imagens, como:

```html
<img src="/img/banner.png">
```

Esse tipo de caminho funciona localmente, mas falha no GitHub Pages devido à estrutura de diretórios do projeto.

---

### ✅ Correção aplicada

Foram ajustados os caminhos para formato relativo, como:

```html
<img src="../img/banner.png">
```

ou

```html
<img src="img/banner.png">
```

✔️ Após a correção e o novo deploy, as imagens passaram a carregar corretamente.

---

## 🧪 Abordagem de testes aplicada

Mesmo sendo um projeto simples, foram considerados alguns cenários básicos de validação:

* ✔️ Verificação de carregamento de imagens
* ✔️ Navegação entre páginas
* ✔️ Estrutura de layout
* ✔️ Consistência visual após deploy
* ✔️ Teste em ambiente local vs ambiente publicado

---

## 📚 Aprendizados

Este projeto contribuiu para o desenvolvimento das seguintes habilidades:

* Estruturação de páginas web
* Versionamento com Git
* Publicação com GitHub Pages
* Diagnóstico de problemas reais de deploy
* Aplicação de raciocínio analítico voltado para QA

---

## 💡 Próximos passos

* Implementar melhorias visuais e responsividade
* Criar mais cenários de testes
* Documentar casos de teste em formato profissional
* Integrar com projetos mais complexos (ex: sistema de login)

---

## 👨‍💻 Autor

Rodrigo Santanna
Em transição para a área de **Qualidade de Software (QA)** e Desenvolvimento
