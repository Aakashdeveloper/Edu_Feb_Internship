import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Footer from './Footer';
import Details from './component/details/detailsPage';
import DisplayApi from './component/booking/displayApi';
import PlaceBooking from './component/booking/placeBooking';
import Header from './Header'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/viewbooking" component={DisplayApi}/>
            <Route path="/booking/:name" component={PlaceBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;

