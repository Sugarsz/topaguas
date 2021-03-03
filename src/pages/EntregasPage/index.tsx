import React from 'react';

import { Container } from './styles';
import Content from '../../components/Content';
import EntregasChart from '../../components/EntregasChart';
import EntregasList from '../../components/EntregasList';

const EntregasPage: React.FC = () => {
    return (
        <Container>
            <Content>
                <EntregasList />
                <EntregasChart />
            </Content>
        </Container>
    )
}
export default EntregasPage;