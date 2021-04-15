import React,{Component} from 'react';
import axios from 'axios';

const url = "https://restapilive.herokuapp.com/restaurent?cuisine="

class CuisineFilter extends Component{

    cuisineFilter = (event) => {
        let cuisineId = event.target.value;
        let cuisineUrl = `${url}${cuisineId}`
        axios.get(cuisineUrl)
            .then((response) => {this.props.restPerCuisine(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cuisine</center>
                <div onChange={this.cuisineFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
            </React.Fragment>
        )
    }

}

export default CuisineFilter