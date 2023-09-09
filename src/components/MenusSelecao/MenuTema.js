import { useContext } from "react";
import { Text, View } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import Botao from "../Botao";
import getEstilo from "./estilos";
import getTextos from "../../service/getTextos";

export default function MenuTema() {

    const { temas, temaAtual, setTemaAtual } = useContext(TemaContext);
    const estilos = getEstilo(temas);

    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma);

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>{textos.tema}</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={textos.escuro}
                    callback={() => setTemaAtual("escuro")} selecionado={temaAtual == 'escuro'}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={textos.claro}
                    callback={() => setTemaAtual("claro")} selecionado={temaAtual == 'claro'}
                />
            </View>

        </View>
    );
}
