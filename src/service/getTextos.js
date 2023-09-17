import textos from "../data/textos";
import { Idiomas } from "../types/Idiomas";

export default function getTextos(idioma) {
    return textos[idioma] || textos[Idiomas[idioma]];
}