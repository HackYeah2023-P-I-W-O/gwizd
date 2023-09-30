import { AccountCircleOutlined } from '@mui/icons-material';
import { Box, Button, Modal, Stack, TextField, styled } from '@mui/material';
import { useState } from 'react';

const StyledModalBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 640px;
    max-width: 100vw;
    height: 600px;
    max-height: 100%;
    border-radius: 16px;

    padding: ${({ theme }) => theme.spacing(4)};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledIconBox = styled(Box)`
    margin: 0 auto 32px;

    & svg {
        font-size: 96px;
    }
`;

const StyledTextField = styled(TextField)`
    margin-bottom: 24px;
`;

const StyledSubmitBtn = styled(Button)`
    padding: ${({ theme }) => theme.spacing(2)};
`;

const StyledModeBtn = styled(Button)`
    padding: ${({ theme }) => theme.spacing(2)};

    &:hover {
        background: none;
        text-decoration: underline;
    }
`;

export function AuthenticationModal() {
    const [signup, setSignup] = useState(false);

    const handleToggleState = () => {
        setSignup((prev) => !prev);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submitted');
    };

    return (
        <Modal open={true}>
            <StyledModalBox bgcolor='secondary.main'>
                <Stack width='100%'>
                    <StyledIconBox color='primary.main'>
                        <AccountCircleOutlined />
                    </StyledIconBox>
                    <form onSubmit={handleSubmit}>
                        <StyledTextField fullWidth label='Username' required />
                        <StyledTextField fullWidth label='Password' required />
                        {signup && (
                            <StyledTextField
                                fullWidth
                                label='Confirm password'
                                required
                            />
                        )}
                        <StyledSubmitBtn
                            fullWidth
                            type='submit'
                            variant='contained'
                        >
                            Submit
                        </StyledSubmitBtn>
                        <StyledModeBtn
                            onClick={handleToggleState}
                            fullWidth
                            variant='text'
                        >
                            {signup ? 'Sign in' : 'Sign up'}
                        </StyledModeBtn>
                    </form>
                </Stack>
            </StyledModalBox>
        </Modal>
    );
}
