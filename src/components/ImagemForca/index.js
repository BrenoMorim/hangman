import { useContext } from "react";
import { Dificuldades } from "../../types/Dificuldades";

import Forca0 from "../../assets/forca/forca0.svg";
import Forca1 from "../../assets/forca/forca1.svg";
import Forca2 from "../../assets/forca/forca2.svg";
import Forca3 from "../../assets/forca/forca3.svg";
import Forca4 from "../../assets/forca/forca4.svg";
import Forca5 from "../../assets/forca/forca5.svg";
import Forca6 from "../../assets/forca/forca6.svg";
import { DificuldadeContext } from "../../contexts/DificuldadeContext";

export default function ImagemForca({numeroErros, height, width}) {
    const { dificuldade } = useContext(DificuldadeContext);
    if (numeroErros == 0) return <Forca0 height={height} width={width}/>;
    if (numeroErros == 1) return <Forca1 height={height} width={width}/>;
    if (numeroErros == 2) return <Forca2 height={height} width={width}/>;
    if ((numeroErros == 3 && dificuldade == Dificuldades.dificil) || 
        (numeroErros == 4 && dificuldade == Dificuldades.medio) || 
        numeroErros == 6) return <Forca6 height={height} width={width}/>;
    if ((numeroErros == 3 && dificuldade == Dificuldades.medio) || numeroErros == 4) return <Forca4 height={height} width={width}/>;
    if (numeroErros == 5) return <Forca5 height={height} width={width}/>;
    if (numeroErros == 3 && dificuldade == Dificuldades.facil) return <Forca3 height={height} width={width}/>
}