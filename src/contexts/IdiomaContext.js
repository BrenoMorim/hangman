import { createContext, useState } from "react";
import { Idiomas } from "../types/Idiomas";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const IdiomaContext = createContext({});
IdiomaContext.displayName = "idioma";

export function IdiomaProvider({ children }) {

    const [idioma, setIdioma] = useState(Idiomas.portugues);

    async function pegaIdiomaArmazenado() {
        const idiomaArmazenado = await AsyncStorage.getItem("idioma");
        if (idiomaArmazenado) setIdioma(idiomaArmazenado);
    }

    pegaIdiomaArmazenado();

    async function atualizaIdioma(novoIdioma) {
        setIdioma(novoIdioma);
        await AsyncStorage.setItem("idioma", novoIdioma);
    }

    return (
        <IdiomaContext.Provider
            value={{
                idioma,
                atualizaIdioma,
            }}
        >
            {children}
        </IdiomaContext.Provider>
    );
}