import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../../Header';
import Slider from "react-slick";
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://restapilive.herokuapp.com/rest";
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        // let details = this.state.details
        let {details} = this.state;
        return(
            <>
                <Header/>
                <br/>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>{this.state.details.name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings}>
                                        <div>
                                            <img className="img-responsive" src={details.thumb}/>
                                        </div>
                                        <div>
                                            <img className="img-responsive" src='https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg'/>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="col-md-6">
                                    <h3>{details.name}</h3>
                                    <h3>{details.locality}</h3>
                                    <h3>{details.address}</h3>
                                </div>
                            </div>
                            <hr/>
                            <Tabs>
                                <TabList>
                                <Tab>OverView</Tab>
                                <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>About This Place</h2>
                                    <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Us</h2>
                                    <h3>{details.address}</h3>
                                    <h3>Phone: 87678676</h3>
                                </TabPanel>
                            </Tabs>
                            <Link to={`/booking/${details.name}`} className="btn btn-success">
                                Proceed Order
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        const hotelId = this.props.match.params.id;
        axios.get(`${url}/${hotelId}`)
        .then((res) =>  {
            this.setState({details:res.data[0]})
            sessionStorage.setItem('cost',res.data[0].cost)
        })
        
    }

}

export default Details
