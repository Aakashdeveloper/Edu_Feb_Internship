import React,{Component} from 'react';
import axios from 'axios';

const url = "https://restapilive.herokuapp.com/restaurent?sort="

class SortFilter extends Component{

    sortFilter = (event) => {
        let sortOrder = Number(event.target.value)
        console.log(`${url}${sortOrder}`)
        axios.get(`${url}${sortOrder}`)
            .then((response) => {this.props.restPerSort(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Sort</center>
                <div onChange={this.sortFilter}>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>Low - High
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="cuisine"/>High - Low
                    </label>
                   
                </div>
            </React.Fragment>
        )
    }

}

export default SortFilter