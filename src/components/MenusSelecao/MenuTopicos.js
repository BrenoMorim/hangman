import { useContext } from "react";
import { Topicos } from "../../types/Topicos";
import getEstilos from "./estilos";
import { TopicoContext } from "../../contexts/TopicoContext"
import { TemaContext } from "../../contexts/TemaContext";
import getTextos from "../../service/getTextos";
import { IdiomaContext } from "../../contexts/IdiomaContext";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function MenuTopicos() {

	const { temas } = useContext(TemaContext);
	const { idioma } = useContext(IdiomaContext);
	const estilos = getEstilos(temas);
	const textos = getTextos(idioma);
	const { topico, atualizaTopico } = useContext(TopicoContext);

	return (
		<View style={estilos.container}>
			<Text style={estilos.titulo}>{textos.topico}:</Text>

			<SelectDropdown

				data={Object.keys(Topicos)}
				defaultValue={topico}
				defaultButtonText={textos.escolhaUmTopico}
				onSelect={(itemSelecionado) => {
					atualizaTopico(itemSelecionado);
				}}
				buttonTextAfterSelection={(itemSelecionado) => {
					return textos[itemSelecionado];
				}}
				rowTextForSelection={(item) => {
					return textos[item];
				}}
				buttonStyle={{ borderRadius: 4, backgroundColor: temas.corTextos, borderColor: temas.laranja, borderWidth: 3, margin: 12 }}
				buttonTextStyle={{ color: temas.laranja, fontSize: 18, fontWeight: "500" }}
				rowStyle={{ backgroundColor: temas.corTextos }}
				rowTextStyle={{ color: temas.corFundo }}
				selectedRowStyle={{ backgroundColor: temas.corTextos }}
				selectedRowTextStyle={{ color: temas.laranja }}
			/>
		</View>
	)
}
