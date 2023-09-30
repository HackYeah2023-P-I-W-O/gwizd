import { CssBaseline, Grid, styled } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import { Map } from './components/Map/Map';
import theme from './theme/theme';

import Navbar from '../components/Navbar/Navbar';

const StyledMapContainer = styled(Grid)`
    width: 100vw;
    height: 100vh;
`;

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container>
                <StyledMapContainer item>
                    <Map />
                </StyledMapContainer>
                <Grid item>
                    <Navbar />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
