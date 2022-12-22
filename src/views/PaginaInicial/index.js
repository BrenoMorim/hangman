import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import { TemaContext } from "../../contexts/TemaContext";

export default function PaginaInicial() {
    const navegacao = useNavigation();
    const {
        temas,
        temaAtual,
        setTemaAtual
    } = useContext(TemaContext);  
    const estilos = getEstilo(temas);
    return (
        <SafeAreaView style={estilos.container}>
            <Logo/>
            <TouchableOpacity style={estilos.botao} onPress={() => {navegacao.navigate("Jogo");}}>
                <Text style={estilos.botaoTexto}>Jogar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.botaoTexto}>Trocar Idioma</Text>
            </TouchableOpacity>
            <Text style={estilos.texto}>Idioma Atual: Português</Text>
            <TouchableOpacity style={estilos.botao} onPress={() => {setTemaAtual(temaAtual == 'claro' ? 'escuro' : 'claro')}}>
                <Text style={estilos.botaoTexto}>Trocar Tema</Text>
            </TouchableOpacity>
            <Text style={estilos.texto}>Tema atual: {temaAtual}</Text>
        </SafeAreaView>
    );
}

const getEstilo = (tema) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: tema.corFundo
    },
    botao: {
        marginVertical: 24,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: tema.corTextos,
        borderRadius: 12
    },
    botaoTexto: {
        color: tema.laranja,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center"
    },
    texto: {
        fontSize: 24,
        fontWeight: "400",
        textTransform: "capitalize",
        color: tema.corTextos
    }
});