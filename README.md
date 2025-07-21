# 🦇 Bat Pass Generator (Desafio da DIO)

## 📖 Descrição

Este projeto se consiste em um gerador de senhas fortes desenvolvido com React Native, TypeScript e Expo na temática do Batman. Foi o meu primeiro contato utilizando React Native e aprendi bastante sobre os componentes específicos do framework e a trabalhar com o sistema android lado a lado através de emuladores e pelo Expo Go.

## 📦 Instalação local

1. Clone este repositório:

```bash
git clone https://github.com/GracilianoOG/dio-bat-pass.git
```

2. Abra o projeto em sua IDE preferida, exemplo no VSCode:

```bash
cd dio-bat-pass/
```

3. Após navegar para dentro do diretório, inicie o VSCode:

```bash
code .
```

4. Instale as dependências:

```bash
npm install
```

5. Rode o projeto com o script (padrão):

```bash
npm run start
```

## 📜 Scripts disponíveis

| Script     | Comando                 | Descrição                             |
| ---------- | ----------------------- | ------------------------------------- |
| `start`    | `expo start`            | Inicia o projeto no modo padrão       |
| `android`  | `expo start --android`  | Inicia o projeto no emulador Android  |
| `ios`      | `expo start --ios`      | Inicia o projeto no simulador iOS     |
| `web`      | `expo start --web`      | Inicia o projeto no navegador web     |

## 🗂️ Estrutura do projeto

```
📁 assets/ -> contém os assets (imagens) do projeto.
📁 src/
  📁 components/ -> armazena os components separados em pastas.
  📁 screens/ -> guarda as telas que serão compostas com os componentes.
  📁 services/ -> inclui os serviços da aplicação.
  📄 app.json -> armazena as configurações do app.
  📄 images.d.ts -> guarda as declarações dos tipos de imagens.
  📄 App.tsx -> entry point do app (componente principal).
```

Os componentes são organizados em pastas com seu devido nome. O componente principal possui a palavra `component` em seu nome, enquanto os estilos incluem a palavra `style`:

```
📁 components/
  📁 BatButton/
    📄 BatButton.component.tsx
    📄 BatButton.style.tsx
```

## 🛠️ Ferramentas e tecnologias

[![Ferramentas](https://skillicons.dev/icons?i=react,ts,nodejs,npm,vscode,bash)](https://skillicons.dev)

- Desenvolvido com `React Native` para criar aplicativos móveis nativos.
- Utiliza `Expo` para facilitar o desenvolvimento e a gestão do projeto.
- Usa `react` para construir a interface do usuário.
- Implementa funcionalidades de clipboard com `expo-clipboard`.
- Desenvolvido com `TypeScript` para garantir tipagem forte e maior segurança.
- Ferramentas de desenvolvimento com suporte a tipagens do React.

## 🔗 Links

- [Digital Innovation One](https://www.dio.me/)
- [React Native Components](https://reactnative.dev/docs/components-and-apis)
- [Expo Docs](https://docs.expo.dev/)

## 🧑🏻‍💻 Autor

| [<img src="https://avatars.githubusercontent.com/u/72778164?s=96&v=4"><br><sub>GracilianoOG</sub>](https://github.com/GracilianoOG) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                           [Linkedin](www.linkedin.com/in/gabrielgmbarros)                                           |

## 📝 Licença

O código fonte está sob a licença [MIT](./LICENSE).
