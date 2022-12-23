import { createContext, useState } from "react";

export const IdiomaContext = createContext({});

export function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState("português");
    function trocarIdioma() {
        setIdioma(idioma == 'english' ? 'português' : 'english');
    }
    return (
        <IdiomaContext.Provider
            value={{
                idioma,
                trocarIdioma,
            }}
        >
            {children}
        </IdiomaContext.Provider>
    );
}