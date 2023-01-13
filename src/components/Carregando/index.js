import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import getTextos from "../../service/getTextos";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Carregando({ativado}) {

    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas, ativado);
    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma); 

    return (
        <Animatable.View 
            animation={"swing"} 
            iterationCount={"infinite"} 
            duration={500}
            style={estilos.carregando}
        >
            <Text style={estilos.carregandoTexto}>{textos.carregando}</Text>
        </Animatable.View>
    )
}

const getEstilo = (temas, ativado) => {
    
    return StyleSheet.create({
        carregando: {
            display: ativado ? "flex" : "none",
            backgroundColor: temas.laranja,
            padding: 16,
            borderRadius: 24,
            zIndex: 5,
            textAlign: "center",
            alignItems: "center",
            position: "absolute",
            alignSelf: "center",
            opacity: ativado ? 1 : 0,
            top: "40%"
        },
        carregandoTexto: {
            color: temas.corTextos,
            fontSize: 45,
            fontWeight: "700"
        }
    });
}