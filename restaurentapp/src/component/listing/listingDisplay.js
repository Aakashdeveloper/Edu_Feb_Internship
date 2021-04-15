import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay= (props) => {

    const renderList = ({restaurentList}) => {
        if(restaurentList){
            if(restaurentList.length>0){
                return restaurentList.map((item) => {
                    return(
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="Image" src={item .thumb}/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="city_name">{item.locality}</div>
                                        <div className="city_name">{item.address}</div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="cuisine">Meal Type</div>
                                    <div className="cuisine">Cuisine Type</div>
                                    <div className="cuisine">Cost For Two</div>
                                </div>
                                <div className="col-md-3">
                                    <div className="cuisine_data">
                                        {item.type[0].name}, {item.type[1].name}
                                    </div>
                                    <div className="cuisine_data">
                                        {item.Cuisine[0].name}, {item.Cuisine[1].name}
                                    </div>
                                    <div className="cuisine_data">Rs. {item.cost}</div>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <center>
                            <h2>No Data Found</h2>
                        </center>
                    </div>
                )
            }

        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif" style={{height:300,width:300}}/>
                </div>
            )
        }
    }

    return(
        <>
        {renderList(props)}
        </>
    )

}

export default ListingDisplay