import axios from "axios";
import { palavras } from "../data/palavrasPadroes";
import { Idiomas } from "../types/Idiomas";

export async function escolherPalavraSecreta(idioma) {
    try {
        // Realizando Web Scraping
        let url;
        if (idioma == Idiomas.ingles) {
            url = "https://www.palabrasaleatorias.com/random-words.php?fs=1";
        } else if (idioma == Idiomas.portugues) {
            url = "http://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1";
        } else {
            url = "http://www.palabrasaleatorias.com/index.php?fs=1";
        }
        const resposta = await axios.get(url);
        const html = resposta.data;

        // Extraindo palavra gerada do HTML
        const busca = `<div style="font-size:3em; color:#6200C5;">`;
        const indice1 = html.indexOf(busca);
        const indice2 = html.indexOf('</div>', indice1);
        const palavraSecreta = html.substring(indice1 + busca.length, indice2);

        // Checando erros e formatando o output
        if (palavraSecreta.length == 0) throw new Error("Palavra não encontrada");
        return palavraSecreta.trim().toUpperCase().split("");
        
    } catch(erro) {

        // Garente que se o site estiver fora do ar ou se o usuário estiver offline ele ainda poderá jogar
        const indiceAleatorio = Math.floor(Math.random() * palavras[idioma].length);
        const palavraSecreta = palavras[idioma][indiceAleatorio];
        return palavraSecreta.split("");
    }
}
