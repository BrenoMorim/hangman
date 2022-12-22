import { createContext, useState } from "react";
import { escuro, claro } from "../estilosGlobais";

export const TemaContext = createContext({});

export function TemaProvider({ children }) {
    const [tema, setTemaAtual] = useState("escuro");

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    return (
        <TemaContext.Provider
            value={{
                tema,
                temas: temas[tema],
                setTemaAtual,
            }}
        >
            {children}
        </TemaContext.Provider>
    );
}