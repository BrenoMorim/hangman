import { useContext } from "react";
import { Topicos } from "../../types/Topicos";
import getEstilos from "./estilos";
import { TopicoContext } from "../../contexts/TopicoContext"
import { TemaContext } from "../../contexts/TemaContext";
import getTextos from "../../service/getTextos";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { Text, View } from "react-native";
import Select from "../Select";

export default function MenuTopicos() {

	const { temas } = useContext(TemaContext);
	const { idioma } = useContext(IdiomaContext);
	const estilos = getEstilos(temas);
	const textos = getTextos(idioma);
	const { topico, atualizaTopico } = useContext(TopicoContext);

	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>{textos.escolhaUmTopico}:</Text>

			<Select 
				opcoes={Object.keys(Topicos)}
				placeholder={topico}
				aoSelecionar={atualizaTopico}
				valorPadrao={topico}
				textoParaSelecao={(item) => textos[item]}
				textoSelecionado={(itemSelecionado => textos[itemSelecionado])}
			/>
		</View>
	)
}
