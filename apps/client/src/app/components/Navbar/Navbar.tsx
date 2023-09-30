import { Box, Stack, styled, Button } from '@mui/material';

import { Menu } from '@mui/icons-material';
import { AccountCircleOutlined } from '@mui/icons-material';

const StyledBox = styled(Box)`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1000;
    box-shadow: 0px 0px 16px 10px rgba(0, 0, 0, 0.15);
`;

const StyledButton = styled(Button)`
    padding: 1.5rem 0;
`;

export function Navbar() {
    return (
        <Box bgcolor='secondary.main' component={StyledBox}>
            <Stack>
                <StyledButton>
                    <Menu />
                </StyledButton>
                <StyledButton>
                    <AccountCircleOutlined />
                </StyledButton>
            </Stack>
        </Box>
    );
}
