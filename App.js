import { DificuldadeProvider } from './src/contexts/DificuldadeContext';
import { IdiomaProvider } from './src/contexts/IdiomaContext';
import { TemaProvider } from './src/contexts/TemaContext';
import Routes from './src/routes';

export default function App() {
  
  return (
    <TemaProvider>
      <IdiomaProvider>
        <DificuldadeProvider>
          <Routes/>
        </DificuldadeProvider>
      </IdiomaProvider>
    </TemaProvider>
  );
}
