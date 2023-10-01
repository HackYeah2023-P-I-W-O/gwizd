import { Box, Stack, styled, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { AnimalDrawer } from '../AnimalDrawer';
import { UserDrawer } from '../UserDrawer';

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
    const [openedDrawer, setOpenedDrawer] = useState<
        'animal' | 'profile' | undefined
    >(undefined);

    const toggleDrawerHandler = (drawer: 'animal' | 'profile' | undefined) => {
        setOpenedDrawer(drawer);
    };
    return (
        <>
            <Box bgcolor='secondary.main' component={StyledBox}>
                <Stack>
                    <StyledButton onClick={() => toggleDrawerHandler('animal')}>
                        <Menu />
                    </StyledButton>
                    <StyledButton
                        onClick={() => toggleDrawerHandler('profile')}
                    >
                        <AccountCircleOutlined />
                    </StyledButton>
                </Stack>
            </Box>
            <AnimalDrawer
                open={openedDrawer === 'animal'}
                onClose={() => toggleDrawerHandler(undefined)}
            />
            <UserDrawer
                open={openedDrawer === 'profile'}
                onClose={() => toggleDrawerHandler(undefined)}
            />
        </>
    );
}
