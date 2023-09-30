import { Box, Modal, styled } from '@mui/material';

const StyledModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 480px;
    max-width: 100vw;
    height: 800px;
    max-height: 100%;
`;

export function AuthenticationModal() {
    return (
        <Modal open={true}>
            <StyledModalBox bgcolor='secondary.main'>s</StyledModalBox>
        </Modal>
    );
}
