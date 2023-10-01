import { CssBaseline, Grid, styled, ThemeProvider } from '@mui/material';

import theme from './theme/theme';
import { Map, Navbar, AuthenticationModal } from './components';

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
            <AuthenticationModal />
        </ThemeProvider>
    );
};
