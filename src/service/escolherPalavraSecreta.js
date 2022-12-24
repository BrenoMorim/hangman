import axios from "axios";
import { palavras } from "../data/palavrasPadroes";

export async function escolherPalavraSecreta(idioma) {
    try {

        // Realizando Web Scraping
        let url;
        if (idioma == 'english') {
            url = "https://www.palabrasaleatorias.com/random-words.php?fs=1";
        } else {
            url = "http://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1";
        }
        const resposta = await axios.get(url);
        const html = resposta.data;

        // Extraindo palavra gerada do HTML
        const busca = `<div style="font-size:3em; color:#6200C5;">`;
        const indice1 = html.indexOf(busca);
        const indice2 = html.indexOf('</div>', indice1);
        let palavraSecreta = html.substring(indice1 + busca.length, indice2);

        // Remover acentos
        palavraSecreta = palavraSecreta.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if (palavraSecreta.length == 0) throw new Error("Palavra não encontrada");
        return palavraSecreta.trim().toUpperCase().split("");
        
    } catch(erro) {

        // Garente que se o site estiver fora do ar ou se o usuário estiver offline ele ainda poderá jogar
        const indiceAleatorio = Math.floor(Math.random() * palavras[idioma].length);
        let palavraSecreta = palavras[idioma][indiceAleatorio];
        palavraSecreta = palavraSecreta.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return palavraSecreta.split("");
    }
}
