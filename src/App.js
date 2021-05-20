import './App.css';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './globalStyles';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS }}>
     <Routes />
    </ThemeProvider>
    
  );
}

export default App;
