import React, { useState } from 'react';

import { Container, EntregasHeader, Title, AddEntrega, 
    DaySeparator, ListContainer, BuyerName, 
    BuyerAddress, BuyerCellphone, ItemBought, 
    ListItemsContainer, ItemStatus, Day, DaySeparatorContainer } from './styles';

import AddSvg from '../../assets/add.svg';
import entregas from '../../repostitories/entregas';

const EntregasList: React.FC = () => {  

    return (
        <Container>
            <EntregasHeader>
                <Title>Entregas</Title>
                <AddEntrega><img src={AddSvg} /> </AddEntrega>
            </EntregasHeader>

            <DaySeparatorContainer>
                <Day>Hoje</Day>
                <DaySeparator />
            </DaySeparatorContainer>
            
            {
                entregas.map((item, index) => {

                    let statusColor = "";

                    if (item.status === "active") {
                        statusColor = "#FF7777";
                    } else if (item.status === "delivered") {
                        statusColor = "#A3FF77";
                    }
                    else{
                        statusColor = "#D9D9D9";
                    }
                    

                    return ( 
                        <ListContainer>
                            <ItemStatus status={statusColor}/>
                            <ListItemsContainer>
                                <BuyerName>{item.cliente}</BuyerName>
                                <BuyerAddress>{item.address}</BuyerAddress>
                                <BuyerCellphone>{item.number}</BuyerCellphone>
                                <ItemBought>{item.itembought}</ItemBought>
                            </ListItemsContainer>
                        </ListContainer>
                )})
            }


        </Container>
    )
}

export default EntregasList;

