# Hang Man

> Status do Projeto: Concluído

Um simples jogo da forca para praticar desenvolvimento mobile com React Native.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Hang Man**
| :label: Tecnologias | React Native, JavaScript, Expo

![](https://github.com/BrenoMorim/hangman/blob/main/imagem-projeto.png?raw=true#vitrinedev)

## Detalhes do projeto

O app é um jogo da forca que permite que o usuário jogue em duas linguagens: português ou inglês, assim como dois temas de cores: claro e escuro. É possível também selecionar uma dificuldade para se jogar, o que vai determinar quantas chances o jogador tem. O projeto foi desenvolvido em React Native, com auxílio da Context API para gerenciar os estados, React Navigation, Expo e a biblioteca Animatable para animações.

A escolha de palavras é feita utilizando web scraping no site https://www.palabrasaleatorias.com, que consegue gerar palavras aleatórias em várias línguas. Essa palavra então é normalizada para retirar acentos e cedilhas. Há também uma lista de palavras em português e outra em inglês localmente no aplicativo que são usadas caso o usuário esteja offline ou o site esteja fora do ar.

## Rodando a aplicação:

Estando com um emulador ou celular aberto, basta executar os comandos abaixo e em seguida escolher a plataforma pela cli do expo (android, web ou ios).

```sh
git clone https://github.com/BrenoMorim/hangman.git hangman
cd hangman
npm install
npm install -g expo
npm start
```
