import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/ClientsDashboard';

const AppRoute: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/clientes" exact component={Dashboard}>
                    
                </Route>
                <Route path="/entregas">
                    <h2> Entregas kkk </h2>
                </Route>
                <Route path="/naoseiainda">
                    <h2> nao sei </h2>
                </Route>
            </Switch>
        </Layout>
    )
}

export default AppRoute;