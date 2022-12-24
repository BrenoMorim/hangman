import { useContext } from "react";
import { Text, View } from "react-native";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";
import { TemaContext } from "../../contexts/TemaContext";
import { Dificuldades } from "../../types/Dificuldades";
import Botao from "../Botao";
import getEstilo from "./estilos";

export default function MenuDificuldade() {
    const { dificuldade, setDificuldade } = useContext(DificuldadeContext);
    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas);
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Dificuldade:</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Fácil"}
                    callback={() => setDificuldade(Dificuldades.facil)} selecionado={dificuldade == Dificuldades.facil}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Médio"}
                    callback={() => setDificuldade(Dificuldades.medio)} selecionado={dificuldade == Dificuldades.medio}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Difícil"}
                    callback={() => setDificuldade(Dificuldades.dificil)} selecionado={dificuldade == Dificuldades.dificil}
                />
            </View>

        </View>
    );
}
