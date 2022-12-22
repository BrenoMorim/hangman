import { IdiomaProvider } from './src/contexts/IdiomaContext';
import { TemaProvider } from './src/contexts/TemaContext';
import Routes from './src/routes';

export default function App() {
  
  return (
    <TemaProvider>
      <IdiomaProvider>
        <Routes/>
      </IdiomaProvider>
    </TemaProvider>
  );
}
