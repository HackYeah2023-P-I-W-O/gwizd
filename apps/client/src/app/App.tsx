import { Button, CssBaseline, Grid, styled } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import { Map } from './components/Map/Map';
import theme from './theme/theme';
import Navbar from '../components/Navbar/Navbar';

const StyledMapContainer = styled(Grid)`
    width: 100%;
    height: 100vh;
`;

const StyledNavbarContainer = styled(Grid)`
    width: 80px;
`;

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container>
                <StyledNavbarContainer item>
                    <Navbar />
                </StyledNavbarContainer>
                <StyledMapContainer item xs>
                    <Map />
                </StyledMapContainer>
            </Grid>
        </ThemeProvider>
    );
};
