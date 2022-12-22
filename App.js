import { TemaProvider } from './src/contexts/TemaContext';
import Routes from './src/routes';

export default function App() {
  
  return (
    <TemaProvider>
      <Routes/>
    </TemaProvider>
  );
}
