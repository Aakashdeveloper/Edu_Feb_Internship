import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './displayBooking';

const url = "https://restapilive.herokuapp.com/orders";

class DisplayApi extends Component{
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }

    render(){
        return(
            <div>
                <ViewBooking bookdata={this.state.bookings}/>
            </div>
        )
    }

    // api call 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({bookings:res.data})})
    }
}

export default DisplayApi