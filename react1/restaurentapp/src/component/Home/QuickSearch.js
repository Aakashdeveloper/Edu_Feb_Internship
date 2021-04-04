import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const  QuickSearch =(props) => {

    const renderList = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/listing/${item._id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={`/images/${item.name}.png`}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your Day with best {item.name} Offers
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="QuickSearchContainer">
            <span id="QuickHeading">
                Quick Searches
            </span>
            <span id="QuickSubHeading">
                Discover Restaurants By Meal Type
            </span>
            {renderList(props)}
        </div>
    )

    
}

export default QuickSearch