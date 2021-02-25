import React from 'react';
import { Grid } from './styles';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <Sidebar />
            <Content>
                { children }
            </Content>
        </Grid>
    )
}
export default Layout;