import axios from "axios";
import { palavras } from "../data/palavrasPadroes";

export async function escolherPalavraSecreta() {
    try {
        const url = "http://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1"
        const resposta = await axios.get(url);
        const html = resposta.data;
        const busca = `<div style="font-size:3em; color:#6200C5;">`;
        const indice1 = html.indexOf(busca);
        const indice2 = html.indexOf('</div>', indice1);
        const palavraSecreta = html.substring(indice1 + busca.length, indice2);
        if (palavraSecreta.length == 0) throw new Error("Palavra não encontrada");
        return palavraSecreta.trim().toUpperCase().split("");
    } catch(erro) {
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        const palavraSecreta = palavras[indiceAleatorio];
        return palavraSecreta.split("");
    }
}