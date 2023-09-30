import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import Navbar from '../components/Navbar/Navbar';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    );
};
