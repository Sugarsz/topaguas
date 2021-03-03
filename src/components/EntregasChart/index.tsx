import React from 'react';

import { Container, ChartContainer, Title, TopContainer, BottomContainer, Chart, ChartTitle, BottomBarContainer } from './styles';
import ChartBrabo from '../PieChart';

import entregaslist from '../../repostitories/entregas';


const EntregasChart: React.FC = () => { 
    
    const todayData = entregaslist.filter(item => item.status === "active" || item.status === "delivered" );
    const pastData = entregaslist.filter(item => item.status === "expired");

    return ( 
        <Container>
            <ChartContainer>
                <TopContainer>
                    <Title>Estatísticas</Title>
                </TopContainer>


                <BottomContainer>

                    <BottomBarContainer>

                        <Chart>
                            <ChartTitle>Entregas hoje</ChartTitle>    
                            <ChartBrabo value={todayData.length} color="#A3FF77"/>
                        </Chart>

                        <Chart>    
                            <ChartTitle>Total do mês</ChartTitle>    
                            <ChartBrabo value={pastData.length + todayData.length} color="#FFD300"/>
                        </Chart>

                    </BottomBarContainer>

                </BottomContainer>
                
            </ChartContainer>
        </Container>
    )
}

export default EntregasChart;