import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://restapilive.herokuapp.com/location";
const restUrl = "https://restapilive.herokuapp.com/restaurent?city="

class Search extends Component{
    constructor(props){
        super(props)

        this.state={
            city:'',
            rest:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const id = event.target.value
        fetch(`${restUrl}${id}`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({rest:data})
        })
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }
     
    render(){
        return(
            <div class="ImageContainer">
                <div className="social">
                    <a href="https://www.facebook.com">
                        <img src="/images/facebook.png" className="img"/>
                    </a>
                    <a href="https://www.youtube.com">
                        <img  src="/images/youtube.png" className="img"/>
                    </a>
                    <a href="https://www.snapchat.com">
                        <img src="/images/snapchat.png" className="img"/>
                    </a>
                </div>
                
                <div id="logo">
                    <b>e!</b>
                </div>
                <div id="heading">
                    Find Bèst Restaurants, Cafës, bâr
                </div>
                <div class="dropdown">
                    <select onChange={this.handleCity}>
                        <option>---Select City---</option>
                        {this.renderCity(this.state.city)}
                    </select>
                    <select onChange={this.handleHotel}>
                        <option>---Select Rest---</option>
                        {this.renderRest(this.state.rest)}
                    </select>
                </div>
            </div>
        )
    }

    // call api on page load
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({city:data}))
    }
}

export default withRouter(Search)