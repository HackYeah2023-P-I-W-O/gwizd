import { Box, styled, Drawer as MuiDrawer } from '@mui/material';
import { Topbar } from '../Topbar';

type DrawerPropsType = {
    children: JSX.Element | JSX.Element[];
    open: boolean;
    onClose: () => void;
};

const StyledBox = styled(Box)`
    max-width: 500px;
    width: 100vw;
    padding: 0 1rem;
`;

export function Drawer({ open, onClose, children }: DrawerPropsType) {
    return (
        <MuiDrawer hideBackdrop anchor='left' open={open} onClose={onClose}>
            <StyledBox>
                <Topbar onClose={onClose} />
                {children}
            </StyledBox>
        </MuiDrawer>
    );
}
