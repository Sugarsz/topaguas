import React from 'react';

import { Container, Title, ListInput, TitleContainer, ListContainer } from './styles';


const NewItemPopup: React.FC = () => {
    return (
        <Container>
            <TitleContainer>    
                <Title>Adicionar Entrega</Title>
            </TitleContainer>
            
            <ListContainer>
                <ListInput>
                    <label htmlFor="customerName">Cliente</label>
                    <input type="text" id="clientName" name="customerName" placeholder=""></input>
                    <label htmlFor="customerName">Endereço</label>
                    <input type="text" id="address" name="address" placeholder=""></input>
                    <label htmlFor="customerName">Número</label>
                    <input type="text" id="number" name="number" placeholder=""></input>
                    <label htmlFor="customerName">Item </label>
                    <input type="text" id="itemBought" name="itemBought" placeholder=""></input>
                    <input type="submit" value="Adicionar" className="submitButton"></input>
                </ListInput> 
            </ListContainer>

        </Container>
    )
}

export default NewItemPopup;