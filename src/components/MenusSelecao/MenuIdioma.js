import { useContext } from "react";
import { Text, View } from "react-native";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { Idiomas } from "../../types/Idiomas";
import getTextos from "../../service/getTextos";
import Botao from "../Botao";
import getEstilo from "./estilos";

export default function MenuIdioma() {
    const { idioma, atualizaIdioma } = useContext(IdiomaContext);
    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas);
    const textos = getTextos(idioma);
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>{textos.idioma}</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Português"}
                    callback={() => atualizaIdioma(Idiomas.portugues)} selecionado={idioma == Idiomas.portugues}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"English"}
                    callback={() => atualizaIdioma(Idiomas.ingles)} selecionado={idioma == Idiomas.ingles}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Español"}
                    callback={() => atualizaIdioma(Idiomas.espanhol)} selecionado={idioma == Idiomas.espanhol}
                />
            </View>

        </View>
    );
}
