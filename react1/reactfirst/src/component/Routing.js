import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import RestDetails from './RestDetails'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rest/:restname" component={RestDetails}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </BrowserRouter>
    )
}

export default Routing;