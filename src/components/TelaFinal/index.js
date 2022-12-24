import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { EstadosJogo } from "../../types/EstadosJogo";
import getTextos from "../../service/getTextos";

export default function TelaFinal({palavraSecreta, resultadoJogo, resetarJogo}) {
    if (resultadoJogo == EstadosJogo.emAndamento) return <></>;

    const navegacao = useNavigation();
    const { temas } = useContext(TemaContext);  
    const estilos = getEstilo(temas);

    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma);

    return (
        <View style={estilos.telaFinal}>
            <Text style={estilos.titulo}>{resultadoJogo == EstadosJogo.ganhou ? textos.mensagemGanhou : textos.mensagemPerdeu}</Text>
            {resultadoJogo == EstadosJogo.perdeu && <Text style={estilos.subtitulo}>{`${textos.revelarPalavraSecreta} ${palavraSecreta.join('')}`}</Text>}
            <TouchableOpacity style={estilos.botao} onPress={async () => await resetarJogo()}>
                <Text style={estilos.botaoTexto}>{textos.botaoJogarNovamente}</Text>
                </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => {navegacao.navigate("PaginaInicial")}}>
                <Text style={estilos.botaoTexto}>{textos.botaoPaginaInicial}</Text>
            </TouchableOpacity>
        </View>
    );
}

const getEstilo = (tema) => StyleSheet.create({
    telaFinal: {
        backgroundColor: tema.corTextos,
        padding: 20,
        zIndex: 2,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        top: "25%",
        borderRadius: 24,
        opacity: 0.9
    },
    titulo: {
        color: tema.corFundo,
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16
    },
    subtitulo: {
        color: tema.laranja,
        fontSize: 28,
        fontWeight: "500",
        textAlign: "center",
        marginVertical: 12
    },
    botao: {
        backgroundColor: tema.corFundo,
        borderRadius: 10,
        padding: 16,
        marginVertical: 16
    },
    botaoTexto: {
        color: tema.corTextos,
        fontWeight: "500",
        fontSize: 24
    }
});