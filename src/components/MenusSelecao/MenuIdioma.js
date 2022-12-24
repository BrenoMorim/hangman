import { useContext } from "react";
import { Text, View } from "react-native";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { TemaContext } from "../../contexts/TemaContext";
import Botao from "../Botao";
import getEstilo from "./estilos";

export default function MenuIdioma() {
    const { idioma, setIdioma } = useContext(IdiomaContext);
    const { temas } = useContext(TemaContext);
    const estilos = getEstilo(temas);
    return (
        <View style={estilos.container}>

            <Text style={estilos.titulo}>Idioma:</Text>

            <View style={estilos.botoesContainer}>
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"Português"}
                    callback={() => setIdioma("português")} selecionado={idioma == "português"}
                />
                <Botao 
                    corFundo={temas.corTextos} corTextos={temas.laranja} texto={"English"}
                    callback={() => setIdioma("english")} selecionado={idioma == "english"}
                />
            </View>

        </View>
    );
}
