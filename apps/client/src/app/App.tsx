import { CssBaseline, Grid, styled } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';
import { Map, Navbar } from './components';
import { AuthenticationModal } from './components/Authentication';

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
