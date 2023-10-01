import { Menu } from '@mui/icons-material';

import { Box, Button, styled } from '@mui/material';

const StyledBox = styled(Box)`
    width: 100%;
    border-bottom: 1px solid lightgrey;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    padding: 1rem 0;
`;

type TopBarType = { onClose: (data: boolean) => void };

export function Topbar({ onClose }: TopBarType) {
    const closeHandler = () => {
        onClose(false);
    };

    return (
        <StyledBox>
            <StyledButton onClick={closeHandler}>
                <Menu />
            </StyledButton>
        </StyledBox>
    );
}
