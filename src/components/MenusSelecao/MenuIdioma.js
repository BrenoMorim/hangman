import { useContext } from "react";
import { Text, View } from "react-native";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { Idiomas } from "../../types/Idiomas";
import getTextos from "../../service/getTextos";
import getEstilo from "./estilos";
import Select from "../Select";

export default function MenuIdioma() {
    const { idioma, atualizaIdioma } = useContext(IdiomaContext);
    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas);
    const textos = getTextos(idioma);
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{textos.idioma}</Text>

            <Select
                opcoes={Object.values(Idiomas)}
                aoSelecionar={atualizaIdioma}
                placeholder={idioma}
                valorPadrao={idioma}
                textoParaSelecao={(item) => item}
                textoSelecionado={(itemSelecionado) => itemSelecionado}
            />
        </View>
    );
}
