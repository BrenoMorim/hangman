import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import getTextos from "../../service/getTextos";
import { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import * as Animatable from 'react-native-animatable';


export default function Carregando({ativado}) {

    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas, ativado);
    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma); 

    return (
    <>
        {ativado && 
            <Animatable.View
                animation="bounceIn"
                duration={500}
                style={estilos.carregando}
            >
                <ActivityIndicator size="large" color={temas.laranja} aria-hidden hidesWhenStopped />
                <Text style={estilos.carregandoTexto}>{textos.carregando}</Text>
            </Animatable.View>
        }
    </>
    )
}

const getEstilo = (temas, ativado) => {
    
    return StyleSheet.create({
        carregando: {
            display: ativado ? "flex" : "none",
            backgroundColor: temas.corTextos,
            padding: 16,
            borderRadius: 24,
            zIndex: 5,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            alignSelf: "center",
            opacity: ativado ? 1 : 0,
            top: "45%",
            borderWidth: 3,
            minWidth: "70%",
            borderColor: temas.laranja
        },
        carregandoTexto: {
            color: temas.corFundo,
            fontSize: 24,
            margin: 12,
            fontWeight: "700"
        }
    });
}