import { useContext } from "react";
import { Text, View } from "react-native";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import getTextos from "../../service/getTextos";
import { Dificuldades } from "../../types/Dificuldades";
import Botao from "../Botao";
import getEstilo from "./estilos";

export default function MenuDificuldade() {
    const { dificuldade, setDificuldade } = useContext(DificuldadeContext);
    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas);
    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma);
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>{textos.dificuldade}</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={textos.facil}
                    callback={() => setDificuldade(Dificuldades.facil)} selecionado={dificuldade == Dificuldades.facil}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={textos.medio}
                    callback={() => setDificuldade(Dificuldades.medio)} selecionado={dificuldade == Dificuldades.medio}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={textos.dificil}
                    callback={() => setDificuldade(Dificuldades.dificil)} selecionado={dificuldade == Dificuldades.dificil}
                />
            </View>

        </View>
    );
}
