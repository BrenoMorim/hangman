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
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: jaFoi ? tema.cinza : tema.laranja,
        borderWidth: 1,
        margin: 3
    },
    teclaLetra: {
        fontSize: 20,
        color: jaFoi ? tema.cinza : tema.laranja,
    }
});