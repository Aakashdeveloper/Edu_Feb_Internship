import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../Header';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cusineFilter';
import CostFilter from '../filters/costFilter';
import SortFilter from '../filters/sortFilter';

const url = "https://restapilive.herokuapp.com/restaurent?mealtype=";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            restlist:''
        }
    }

    setDataPerFilter = (sortedData) => {
        this.setState({restlist:sortedData})
    }

    render(){
        return(
            <div className="row">
                <Header/>
                <div style={{marginLeft:'5%'}}>
                    <div className="col-md-2">
                       <CuisineFilter restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        <SortFilter restPerSort={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restaurentList={this.state.restlist}/>
                    </div>
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