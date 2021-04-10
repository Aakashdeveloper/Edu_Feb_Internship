import React,{Component} from 'react';
import Header from '../../Header';

const BookingUrl = "https://restapilive.herokuapp.com/placeOrder";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            hotel_name:this.props.match.params.name,
            name:'',
            phone:'',
            cost:sessionStorage.getItem('cost')
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit =() =>{
        console.log(this.state)
        fetch(BookingUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(console.log('Booking placed'))
    }

    render(){
        return(
            <>
            <Header/>
            <br/>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Order
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input name="hotel_name" value={this.state.hotel_name}
                            readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name}
                            onChange={this.handleChange}
                             className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone" value={this.state.phone}
                            onChange={this.handleChange}
                             className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input name="cost" value={this.state.cost}
                             readOnly className="form-control"/>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Place Booking
                        </button>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default PlaceOrder;