import { useContext } from "react";
import { Text, View } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import Botao from "../Botao";
import getEstilo from "./estilos";

export default function MenuTema() {

    const { temas, temaAtual, setTemaAtual } = useContext(TemaContext);
    const estilos = getEstilo(temas);

    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Tema:</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Claro"}
                    callback={() => setTemaAtual("claro")} selecionado={temaAtual == 'claro'}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Escuro"}
                    callback={() => setTemaAtual("escuro")} selecionado={temaAtual == 'escuro'}
                />
            </View>

        </View>
    );
}
