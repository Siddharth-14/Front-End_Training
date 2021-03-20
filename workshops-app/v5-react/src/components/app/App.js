// rsf
import React from 'react';

import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import WorkshopsList from '../workshops-list/WorkshopsList';
import { Route } from 'react-router-dom';

function App(props) {
    return (
        <div>
            <Navbar />
            <Route path="/" component={Home} exact />
            <Route path="/workshops" component={WorkshopsList} />
        </div>
    );
}

export default App;