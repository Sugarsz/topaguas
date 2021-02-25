import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 90px auto;

    grid-template-areas: 
    'SB CT';

    height: 100vh;
`;