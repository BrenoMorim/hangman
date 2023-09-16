import { StyleSheet } from "react-native";

const getEstilo = (tema) => StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 6
    },
    titulo: {
        color: tema.corTextos,
        fontSize: 22,
        fontWeight: "500",
        textAlign: "center"
    },
    botoesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});

export default getEstilo;
