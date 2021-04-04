import React, {Component} from 'react';
import axios from 'axios';

const url = "https://restapilive.herokuapp.com/restaurent?mealtype=";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            restlist:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filters Here
                </div>
                <div className="col-md-10">
                   Listing
                </div>
            </div>
        )
    }

    componentDidMount(){
        var mealId = this.props.match.params.id;
        axios.get(`${url}${mealId}`)
        .then((response) => {this.setState({restlist:response.data})})
    }


}

export default ListingApi;