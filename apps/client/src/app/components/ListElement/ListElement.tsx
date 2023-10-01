import { Box, Stack } from '@mui/material';

import { Pets } from '@mui/icons-material';
import styled from 'styled-components';
import { InfoContent } from '../InfoContent';

const StyledBox = styled(Box)`
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 16px;
`;

export function ListElement() {
    return (
        <StyledBox bgcolor='secondary.main'>
            <Stack direction='row'>
                <Pets style={{ fontSize: '5rem' }} />
                <InfoContent />
            </Stack>
        </StyledBox>
    );
}
