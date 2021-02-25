import React from 'react';

import { Container } from './styles';
import Content from '../../components/Content';
import EntregasChart from '../../components/EntregasChart';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Content>
                <EntregasChart />
            </Content>
        </Container>
    ) 
}

export default Dashboard;