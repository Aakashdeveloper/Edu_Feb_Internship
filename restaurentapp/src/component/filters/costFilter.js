import React,{Component} from 'react';
import axios from 'axios';

const url = "https://restapilive.herokuapp.com/restaurent"

class CostFilter extends Component{

    costFilter = (event) => {
        let cost = (event.target.value).split('-');
        let lcost = cost[0]
        let hcost = cost[1]
        axios.get(`${url}?lcost=${lcost}&hcost=${hcost}`)
            .then((response) => {this.props.restPerCost(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost</center>
                <div onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="0-100" name="cuisine"/>0-100
                    </label>
                    <label className="radio">
                        <input type="radio" value="101-200" name="cuisine"/>101-200
                    </label>
                    <label className="radio">
                        <input type="radio" value="201-300" name="cuisine"/>201-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301-400" name="cuisine"/>301-400
                    </label>
                    <label className="radio">
                        <input type="radio" value="401-1000" name="cuisine"/>401-1000
                    </label>
                </div>
            </React.Fragment>
        )
    }

}

export default CostFilter