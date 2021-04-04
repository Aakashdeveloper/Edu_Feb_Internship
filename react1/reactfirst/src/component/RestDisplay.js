import React from 'react';
import {Link} from 'react-router-dom'

const RestDisplay = (props) => {
    const renderList = props.restdata.map((data) => {
        return(
            <div>
                <h3><Link to={`/rest/${data.name}`}>{data.name}</Link></h3>
                <p>{data.locality}</p>
                <p>{data.city_name}</p>
                <hr/>
            </div>
        )
    })


    return(
        <div>
            {renderList}
        </div>
    )
}

export default RestDisplay