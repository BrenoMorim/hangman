import { StyleSheet } from "react-native"

export const getEstilo = (tema) => {
    return StyleSheet.create({
      container: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: tema.corFundo,
        flex: 1,
        zIndex: 0
      },
      chuteContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline"
      },
      progresso: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }
    })
  }