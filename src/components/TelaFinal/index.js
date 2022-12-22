import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import { EstadosJogo } from "../../types/EstadosJogo";

export default function TelaFinal({resultadoJogo, resetarJogo}) {
    if (resultadoJogo == EstadosJogo.emAndamento) return <></>;

    const navegacao = useNavigation();
    const {
        temas,
      } = useContext(TemaContext);  
      const estilos = getEstilo(temas);

    return (
        <View style={estilos.telaFinal}>
            <Text style={estilos.titulo}>{resultadoJogo == EstadosJogo.ganhou ? "Parabéns! Você ganhou =)" : "Que pena! Você perdeu =("}</Text>
            <TouchableOpacity style={estilos.botao} onPress={resetarJogo}>
                <Text style={estilos.botaoTexto}>Jogar Novamente</Text>
                </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => {navegacao.navigate("PaginaInicial")}}>
                <Text style={estilos.botaoTexto}>Página Inicial</Text>
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