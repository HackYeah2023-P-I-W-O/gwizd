import { Grid, styled, List as MuiList } from '@mui/material';

import { ListElement } from '../ListElement';

const StyledGrid = styled(Grid)`
    display: block;
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.4rem;
`;

export function List() {
    return (
        <StyledGrid container>
            <MuiList>
                <ListElement />
                <ListElement />
            </MuiList>
        </StyledGrid>
    );
}
