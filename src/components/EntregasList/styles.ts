import styled, { css } from 'styled-components';

interface IItemStatusProps {
    status: string;
}

export const Container = styled.div`
    width: 1250px;
    height: 860px;
    margin-right: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;


    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 10px;
        
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 10px;
        transform: translateX(-10px);
    }
`;


export const EntregasHeader = styled.div`
    width: 96%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`;  

export const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 100;
    font-size: 32px;
    color: #4B4F55;
    
    &::before {
        content: '';
        display: inline-block;
        background-color: #70CBFF;
        vertical-align: 7%;
        border-radius: 50%;
        width: 15px;
        height: 15px;       
        margin-right: 7px;
    }
`; 

export const AddEntrega = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    > img {
        width: 24px;
        height: 24  px;
        z-index: 99;
    }

    &::before {
        content: '';
        position: absolute;
        width: 55px;
        height: 55px;
        background-color: white;
        border-radius: 5px;
        z-index: 0;

    }

    &:hover {
        cursor: pointer;
        >img {
            opacity: .5;
        }
    }

`;

export const DaySeparator = styled.div`
    height: 1px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 25px;
    background-color: #C1C4CB;
    position: relative;

`;

export const Day = styled.h3`
    font-family: 'Poppins';
    font-size: 14px;
    color: #6D7176;
    font-weight: 400;
`;

export const DaySeparatorContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: column;
`;

export const ListContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 15px;
    position: relative;
    transition: all .1s ease-out;
    &:hover {
        cursor: pointer;
        opacity: .8;
        transform: translateY(-5px);
    }
`;

export const ListItemsContainer = styled.div`
    margin: 0 40px;
    height: 100%;   
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h3 {
        font-family: 'Rubik';
        font-size: 16px;
        color: #6D7176;
    }
`;

export const ItemStatus = styled.div<IItemStatusProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-53%);
    left: 18px;

    background-color: ${props => props.status};
    
    border-radius: 5px;
    width: 15px;
    height: 15px;       
    margin-right: 7px;
`;

export const BuyerName = styled.h3`
    
`;

export const BuyerAddress = styled.h3`

`;

export const BuyerCellphone = styled.h3`

`;

export const ItemBought = styled.h3`

`;
