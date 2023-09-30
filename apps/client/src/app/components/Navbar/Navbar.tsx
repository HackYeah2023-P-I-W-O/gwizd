import { Box, Stack, styled, Button } from '@mui/material';

import { Menu } from '@mui/icons-material';
import { AccountCircleOutlined } from '@mui/icons-material';

const StyledBox = styled(Box)`
    width: 100%;
`;

export function Navbar() {
    return (
        <Box component={StyledBox}>
            <Stack spacing={2}>
                <Button>
                    <Menu />
                </Button>
                <Button>
                    <AccountCircleOutlined />
                </Button>
            </Stack>
        </Box>
    );
}
