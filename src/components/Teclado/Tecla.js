import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LetraEscolhidaContext } from "../../contexts/LetraEscolhidaContext";
import { TemaContext } from "../../contexts/TemaContext";

export default function Tecla({letrasUsadas, letra}) {

    const {
        temas,
    } = useContext(TemaContext);

    const jaFoi = letrasUsadas.includes(letra);
    const estilos = getEstilo(temas, jaFoi);
    const {setLetraEscolhida} = useContext(LetraEscolhidaContext);

    return (
        <TouchableOpacity style={estilos.tecla} disabled={jaFoi} onPress={() => {setLetraEscolhida(letra)}}>
            <Text style={estilos.teclaLetra}>{letra}</Text>
        </TouchableOpacity>
    );
}

const getEstilo = (tema, jaFoi) => StyleSheet.create({
    tecla: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderColor: jaFoi ? tema.cinza : tema.laranja,
        borderWidth: 1,
        margin: 3,
        borderRadius: 5,
    },
    teclaLetra: {
        fontSize: 25,
        fontWeight: "bold",
        color: jaFoi ? tema.cinza : tema.laranja,
    }
});