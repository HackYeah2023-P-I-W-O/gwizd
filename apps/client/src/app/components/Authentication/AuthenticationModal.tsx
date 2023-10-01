import { AccountCircleOutlined } from '@mui/icons-material';
import { Box, Button, Modal, Stack, TextField, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRep, setPasswordRep] = useState('');
    const [error, setError] = useState('');
    const [modalOpened, setModalOpened] = useState(true);

    useEffect(() => {
        axios
            .get(`${API_URL}/auth/@me`, {
                withCredentials: true,
            })
            .then(() => {
                setModalOpened(false);
            });
    }, []);

    const handleToggleState = () => {
        setError('');
        setSignup((prev) => !prev);
    };

    const registerFunc = () => {
        if (password !== passwordRep) {
            setError('Passwords do not match!');
            return;
        }
        axios.post(`${API_URL}/auth/register`, {
            email: `${username}@test.com`,
            username: username,
            password: password,
        });
        setSignup(false);
    };

    const loginFunc = () => {
        axios
            .post(`${API_URL}/auth/login`, {
                emailOrUsername: username,
                password: password,
            })
            .then(() => {
                setModalOpened(false);
            })
            .catch(() => {
                setError('Wrong credentials!');
            });
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (signup) {
            registerFunc();
        } else {
            loginFunc();
        }
        e.preventDefault();
    };

    return (
        <Modal open={modalOpened}>
            <StyledModalBox bgcolor='secondary.main'>
                <Stack width='100%'>
                    <StyledIconBox color='primary.main'>
                        <AccountCircleOutlined />
                    </StyledIconBox>
                    <form onSubmit={handleSubmit}>
                        <StyledTextField
                            fullWidth
                            label='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <StyledTextField
                            fullWidth
                            label='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {signup && (
                            <StyledTextField
                                fullWidth
                                label='Confirm password'
                                value={passwordRep}
                                onChange={(e) => setPasswordRep(e.target.value)}
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
                    {error}
                </Stack>
            </StyledModalBox>
        </Modal>
    );
}
