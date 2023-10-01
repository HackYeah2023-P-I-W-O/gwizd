import { Box, Stack, IconButton, Typography } from '@mui/material';

import { Settings } from '@mui/icons-material/';

const userName = 'superUser_123';
const timePeriod = '7 hours';

export function InfoContent() {
    return (
        <Box sx={{ width: '100%', marginLeft: '1rem' }}>
            <Stack>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='h1'>Stray dog</Typography>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
                <Typography variant='h2'>Posted by {userName}</Typography>
                <div style={{ marginLeft: 'auto', marginTop: '0.5rem' }}>
                    <Typography variant='h3'>
                        Posted {timePeriod} ago
                    </Typography>
                </div>
            </Stack>
        </Box>
    );
}
