import React, { useState } from 'react';

import { Container, EntregasHeader, Title, AddEntrega, 
    DaySeparator, ListContainer, BuyerName, 
    BuyerAddress, BuyerCellphone, ItemBought, 
    ListItemsContainer, ItemStatus, Day, DaySeparatorContainer } from './styles';

import AddSvg from '../../assets/add.svg';
import entregas from '../../repostitories/entregas';


import NewItemPopup from '../NewItemPopup';

const EntregasList: React.FC = () => {  

    const todayList = entregas.filter(item => item.status === "active" || item.status === "delivered");
    const pastList = entregas.filter(item => item.status === "expired");
    

    const todayItems = todayList.map((item, index) => {

        let statusColor = "";

        if (item.status === "active") {
            statusColor = "#FF7777";
        } else if (item.status === "delivered") {
            statusColor = "#A3FF77";
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
    )});

    const expiredItems = pastList.map((item, index) => {

        let statusColor = "";
        statusColor = "#D9D9D9";
        

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
    )});
    
    const [newItemPopup, setItemPopop] = useState<any>();

    const showPopup = () => {
        setItemPopop(<NewItemPopup/>);
    }

    return (
        <Container>
            
            {newItemPopup}
            
            <EntregasHeader>
                <Title>Entregas</Title>
                <AddEntrega onClick={() => showPopup()}><img src={AddSvg} /> </AddEntrega>
            </EntregasHeader>


            {
                (() => { if(todayItems.length != 0) {
                    return (

                        <DaySeparatorContainer>
                            <Day>Hoje</Day>
                            <DaySeparator />
                        </DaySeparatorContainer>
                    )
                }})()
            }
            
            {todayItems}

            {
                (() => { if(pastList.length != 0) {
                    return (

                        <DaySeparatorContainer>
                            <Day>Anterior</Day>
                            <DaySeparator />
                        </DaySeparatorContainer>
                    )
                }})()
            }

            {expiredItems}



        </Container>
    )
}

export default EntregasList;

