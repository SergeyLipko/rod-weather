import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './style.css';

import Home from '../containers/Home';
import PriceTable from '../containers/PriceTable';
import Forecast from '../containers/Forecast';

const RenderLink = ({ url, name }) =>
    <li className="navigation-link">
        <NavLink
            to={{ pathname: url }}
            activeStyle={{ color: '#363636' }}
        >
            { name }
        </NavLink>
    </li>;

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navigation-wrapper">
                        <ul className="app-navigation-list">
                            <RenderLink url="/" name="Home"/>
                            <RenderLink url="/price-table" name="Price table"/>
                            <RenderLink url="/forecast" name="Forecast"/>
                        </ul>
                    </div>

                    <div className="app-wrapper">
                        <div className="app-content-wrapper">
                            <div className="app-content">
                                <Route exact path={`/`} component={Home}/>
                                <Route path={`/price-table`} component={PriceTable}/>
                                <Route path={`/forecast`} component={Forecast}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AppRouter;