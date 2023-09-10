import { createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TemaContext = createContext({});

export function TemaProvider({ children }) {
    const [temaAtual, setTemaAtual] = useState("escuro");

    async function pegaTemaArmazenado() {
        const temaArmazenado = await AsyncStorage.getItem("tema");
        if (temaArmazenado) setTemaAtual(temaArmazenado);
    }

    pegaTemaArmazenado();

    async function atualizaTema(novoTema) {
        setTemaAtual(novoTema);
        await AsyncStorage.setItem("tema", novoTema);
    }

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    return (
        <TemaContext.Provider
            value={{
                temaAtual,
                temas: temas[temaAtual],
                atualizaTema,
            }}
        >
            {children}
        </TemaContext.Provider>
    );
}