import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { TemaContext } from "../../contexts/TemaContext";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { EstadosJogo } from "../../types/EstadosJogo";
import getTextos from "../../service/getTextos";
import Botao from "../Botao";
import * as Animatable from 'react-native-animatable';
import Texto from "../Texto";
import Carregando from "../Carregando";

export default function TelaFinal({palavraSecreta, resultadoJogo, resetarJogo}) {
    if (resultadoJogo == EstadosJogo.emAndamento) return <></>;

    const navegacao = useNavigation();
    const { temas } = useContext(TemaContext);  
    const estilos = getEstilo(temas);

    const { idioma } = useContext(IdiomaContext);
    const textos = getTextos(idioma);

    const [estaCarregando, setEstaCarregando] = useState(false);

    return (
        <Animatable.View animation={"bounceIn"} duration={1200} style={estilos.telaFinal}>

            <Carregando ativado={estaCarregando} />

            <Texto cor={temas.corFundo} tamanho={48} margemHorizontal={0} margemVertical={16} peso={"bold"}>
                {resultadoJogo == EstadosJogo.ganhou ? textos.mensagemGanhou : textos.mensagemPerdeu}
            </Texto>
            {resultadoJogo == EstadosJogo.perdeu && 
                <Texto cor={temas.laranja} tamanho={28} margemVertical={12} margemHorizontal={0}>
                    {`${textos.revelarPalavraSecreta} ${palavraSecreta.join('')}`}
                </Texto>
            }
            <Animatable.View animation={"pulse"} duration={500} iterationCount={"infinite"}>
                <Botao
                    animation
                    texto={textos.botaoJogarNovamente} callback={async () => {
                        setEstaCarregando(true);
                        await resetarJogo();
                        setEstaCarregando(false);
                    }}
                    corFundo={temas.corFundo} corTextos={temas.corTextos}
                />
            </Animatable.View>
            <Botao 
                texto={textos.botaoPaginaInicial} callback={() => {navegacao.navigate("PaginaInicial")}}
                corFundo={temas.corFundo} corTextos={temas.corTextos}
            />
        </Animatable.View>
    );
}

const getEstilo = (tema) => StyleSheet.create({
    telaFinal: {
        backgroundColor: tema.corTextos,
        padding: 20,
        zIndex: 2,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        top: "25%",
        borderRadius: 24,
        opacity: 0.9
    }
});