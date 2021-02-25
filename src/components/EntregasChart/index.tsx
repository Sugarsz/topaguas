import React from 'react';

import { Container, ChartContainer, Title, TopContainer, BottomContainer, Chart, ChartTitle, BottomBarContainer } from './styles';
import ChartBrabo from '../PieChart';



const EntregasChart: React.FC = () => { 
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
                            <ChartBrabo value={15} color="#A3FF77"/>
                        </Chart>

                        <Chart>    
                            <ChartTitle>Total do mês</ChartTitle>    
                            <ChartBrabo value={355} color="#FFD300"/>
                        </Chart>

                    </BottomBarContainer>

                </BottomContainer>
                
            </ChartContainer>
        </Container>
    )
}

export default EntregasChart;