import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import SelectDropdown from "react-native-select-dropdown";


export default function Select({ opcoes, valorPadrao, aoSelecionar, placeholder, textoSelecionado, textoParaSelecao }) {
	
	const { temas } = useContext(TemaContext);

	return (
		<SelectDropdown
			data={opcoes}
			defaultValue={valorPadrao}
			defaultButtonText={placeholder}
			onSelect={aoSelecionar}
			buttonTextAfterSelection={textoSelecionado}
			rowTextForSelection={textoParaSelecao}
			buttonStyle={{ 
				borderRadius: 4, 
				backgroundColor: temas.corTextos, 
				borderColor: temas.laranja, 
				borderWidth: 3, 
				margin: 12 
			}}
			buttonTextStyle={{ 
				color: temas.laranja, 
				fontSize: 18, 
				fontWeight: "500",
				textTransform: 'capitalize'
			}}
			rowStyle={{ 
				backgroundColor: temas.corTextos 
			}}
			rowTextStyle={{ 
				color: temas.corFundo,
				textTransform: 'capitalize'
			}}
			selectedRowStyle={{ 
				backgroundColor: temas.corTextos
			}}
			selectedRowTextStyle={{ 
				color: temas.laranja,
				textTransform: 'capitalize'
			}}
		/>
	);
}