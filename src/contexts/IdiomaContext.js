import { createContext, useState } from "react";
import { Idiomas } from "../types/Idiomas";

export const IdiomaContext = createContext({});

export function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState(Idiomas.portugues);
    return (
        <IdiomaContext.Provider
            value={{
                idioma,
                setIdioma,
            }}
        >
            {children}
        </IdiomaContext.Provider>
    );
}