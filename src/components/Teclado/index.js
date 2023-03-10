import { FlatList, StyleSheet } from "react-native";
import Tecla from "./Tecla";

export default function Teclado({letrasUsadas}) {
    const linhas = [
        "QWERTYUIOP".split(""),
        "ASDFGHJKL".split(""),
        "ZXCVBNM".split("")
    ];
    return (

        <FlatList
            data={linhas}
            style={estilos.linhasContainer}
            keyExtractor={() => Math.random()}
            renderItem={(item) => {
                return (
                    <FlatList
                    style={estilos.linhaContainer}
                    data={item.item}
                    keyExtractor={() => Math.random()}
                    renderItem={(item) => <Tecla letrasUsadas={letrasUsadas} letra={item.item}/>}
                    />
                    );
                }}
            />
    );
}

const estilos = StyleSheet.create({
    linhasContainer: {
        flexDirection: "column",
        display: "flex",
        marginVertical: 20
    },
    linhaContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
})