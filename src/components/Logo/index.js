import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native"
import { TemaContext } from "../../contexts/TemaContext";

export default function Logo() {

    const {
        temas,
      } = useContext(TemaContext);  
      const estilos = getEstilo(temas);

    return (
        <View style={estilos.titulosContainer}>
            <Text style={estilos.tituloBold}>Hang</Text><Text style={estilos.titulo}>Man</Text>
        </View>
    );
}

const getEstilo = (tema) => {
    return StyleSheet.create({
      titulosContainer: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 5,
        borderColor: tema.preto,
        marginVertical: 24
      },
      titulo: {
        color: tema.corTextos,
        fontSize: 56,
        fontWeight: "bold"
      },
      tituloBold: {
        color: tema.laranja,
        fontWeight: "bold",
        fontSize: 56
      }
    })
  }