import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface IMenuItemProps {
    isSelected: boolean;
}

export const Container = styled.div`
    grid-area: SB;
    background-color: #FFFFFF;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-top: 25px;
    margin-bottom: 25px;

`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;

`;

export const  LogoImg = styled.img`
    width: 33px;
    height: 33px; 
    position: absolute; 
    z-index: 13;
`;


export const  LogoImgContainer = styled.div`
    width: 30px;
    display: flex;
    justify-content: center;
    position: absolute; 
    

    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        bottom: -37px;
        background-color: transparent;
        border-radius: 50%;
        z-index: 0;
        transition: all .1s linear;

    }
    
    &:hover {
        cursor: pointer;
        &::after {
            content: '';
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: rgba(112, 203, 255, .2);
            border-radius: 50%;
            z-index: 0;
            transition: all .1s linear;

        }
    }
`;

export const  Footer = styled.div`

`;

export const  MenuItem = styled(Link)<IMenuItemProps>`

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

    &:hover {
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, .1);
            border-radius: 5px;
            z-index: 0;

        }
    }

    ${props => props.isSelected && css`
        > img {
            filter: brightness(0) invert(1);
        }
        &::after {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: #70cbff;
            border-radius: 5px;
            z-index: 0;

        }
    `}
`;

export const  MenuItemContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 232px;

`;

export const  LogOutImg = styled.img`
    width: 24px;
    height: 24px;

    z-index: 999;
`;


export const  LogOut = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;

    &::before {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: transparent;
        border-radius: 75px;
        z-index: 0;

    }

    &:hover {
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, .1);
            border-radius: 5px;
            z-index: 0;

        }
    }
`;
 