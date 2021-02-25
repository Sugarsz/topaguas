import React, { useState } from 'react';

import { Container, Header, LogoImg, Footer, MenuItem, LogOut, MenuItemContainer, LogOutImg, LogoImgContainer } from './styles';

import logoImg from '../../assets/logo.svg';
import logOutImg from '../../assets/logout.svg';
import dashboard from '../../assets/dashboard.svg';
import lists from '../../assets/list.svg';
import settings from '../../assets/settings.svg';

const Sidebar: React.FC = () => {

    const menuItems = [
        {name: "clientes", path: '/clientes', icon: dashboard},
        {name: "entregas", path: '/entregas', icon: lists},
        {name: "naoseiainda", path: '/naoseiainda', icon: settings},
    ];

    const [selected, setSelected] = useState(menuItems[0].name);

    const handleMenuItemClick = (itemName: string) => {
        setSelected(itemName);
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;

        return (
            <MenuItem to={item.path} onClick={() => handleMenuItemClick(item.name)} key={index} isSelected={isItemSelected}>
                <img src={item.icon} alt={item.name}></img>
            </MenuItem>
        )
    })

    console.log(menuItemsJSX);

    return (
        <Container>
            <Header>
                <LogoImgContainer>
                    <LogoImg src={logoImg} alt="Top Aguas"/>
                </LogoImgContainer>
            </Header>

            <MenuItemContainer>
                {menuItemsJSX}
            </MenuItemContainer>

            <Footer>
                <LogOut>
                    <LogOutImg src={logOutImg} alt="LogOut"/>
                </LogOut>
            </Footer>

        </Container>
    )
}

export default Sidebar;