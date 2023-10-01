import { Stack, Typography, Box, styled } from '@mui/material';
import { List } from '../List';
import { Drawer } from '../core';

type UserPropsType = { open: boolean; onClose: () => void };

const StyledBox = styled(Box)`
    margin-top: 1rem;
    padding: 1rem;
`;

export function UserDrawer({ open, onClose }: UserPropsType) {
    return (
        <Drawer open={open} onClose={onClose}>
            <StyledBox>
                <Stack>
                    <Typography variant='h1'>UserName</Typography>
                    <Typography variant='h2'>Report history</Typography>
                    <List />
                </Stack>
            </StyledBox>
            <List />
        </Drawer>
    );
}
