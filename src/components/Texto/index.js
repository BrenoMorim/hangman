import { StyleSheet, Text } from 'react-native';

export default function Texto({children, cor="#222", margemVertical=10, margemHorizontal=8, tamanho=24, peso="500"}) {
    const estilo = StyleSheet.create({
        texto: {
            color: cor,
            marginVertical: margemVertical,
            marginHorizontal: margemHorizontal,
            fontSize: tamanho,
            fontWeight: peso,
            textAlign: "center"
        }
    });
    return (
        <Text style={estilo.texto}>
            {children}
        </Text>
    );
}