import { Box, styled, Drawer as MuiDrawer } from '@mui/material';
import { useState } from 'react';

const StyledBox = styled(Box)`
    max-width: 500px;
    width: 100vw;
`;

export function Drawer() {
    const [open, setOpen] = useState(true);

    return (
        <MuiDrawer anchor='left' open={open} onClose={() => setOpen(false)}>
            <StyledBox></StyledBox>
        </MuiDrawer>
    );
}
