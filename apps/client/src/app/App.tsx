import { CssBaseline, Grid, styled, ThemeProvider } from '@mui/material';

import theme from './theme/theme';
import { Map, Navbar, Drawer } from './components';

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
            <Drawer />
        </ThemeProvider>
    );
};
