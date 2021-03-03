import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        top: 16%;
        left: 29.13%;
        transform: scale(.95);
        opacity: .3;
        transform-origin: top center;
    }
    100% {
        top: 16%;
        left: 29.13%;
        opacity: 1;
        transform: scale(1);
        transform-origin: top center;
    }
`;

export const Container = styled.div`
    position: absolute;
    width: 800px;
    height: 600px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 40px -4px rgba(0, 0, 0, .323);
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${animate} .3s;
`;

export const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 32px;
    color: #4B4F55;
    
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #70CBFF;
    }
`;

export const ListInput = styled.form`
    display: flex;
    flex-direction: column;

    > label {
        margin-top: 25px;
        color: #6D7176;
        font-family: 'Rubik';
        font-weight: 400;
        font-size: 18px;
    }
    > input {
        color: #6D7176;
        font-family: 'Rubik';
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        height: 50px;
        background-color: #F0F3F8;
        border-radius: 5px;
    }
    .submitButton {
        background-color: #70CBFF;
        width: 250px;
        height: 45px;
        border-radius: 45px;
        align-self: center;
        margin-top: 45px;
        color: white;
        font-family: 'Poppins';
        font-weight: 500;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const TitleContainer = styled.div`
    padding-bottom: 0px;
`;

export const ListContainer = styled.div`

    width: 85%;
`;
