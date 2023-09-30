import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './theme/theme';

export const App = () => {
    return <ThemeProvider theme={theme}></ThemeProvider>;
};
