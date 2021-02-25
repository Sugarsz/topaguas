import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container } from './styles';

interface IPieChartProps {
    color: string;
    value: number;
}

const ChartBrabo: React.FC<IPieChartProps> = ({ color, value }) => {
    
    let data = [
        {name: "Para entregar", value: value},
        {name: "Entregados", value: value}
    ]

    return (
        <Container>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={300} height={300}>
                    <Pie  
                        data={data}
                        innerRadius={95}
                        outerRadius={120}
                        fill={color}
                        dataKey="value"
                        blendStroke={true}  
                    />

                    <text x={194} y={150} fill="#6D7176" textAnchor="middle" dominantBaseline="central">
                        {value}
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default ChartBrabo;