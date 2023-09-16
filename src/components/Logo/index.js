import { useContext } from "react";
import { StyleSheet, Text } from "react-native"
import { TemaContext } from "../../contexts/TemaContext";
import * as Animatable from 'react-native-animatable';

export default function Logo() {

    const {
        temas,
      } = useContext(TemaContext);  
      const estilos = getEstilo(temas);

    return (
        <Animatable.View animation={"bounceInDown"} duration={1500} style={estilos.titulosContainer}>
            <Text style={estilos.tituloBold}>Hang</Text><Text style={estilos.titulo}>Man</Text>
        </Animatable.View>
    );
}

const getEstilo = (tema) => {
    return StyleSheet.create({
      titulosContainer: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 5,
        borderColor: tema.preto,
        marginVertical: 16
      },
      titulo: {
        color: tema.corTextos,
        fontSize: 48,
        fontWeight: "bold"
      },
      tituloBold: {
        color: tema.laranja,
        fontWeight: "bold",
        fontSize: 48
      }
    })
  }