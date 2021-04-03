import React from 'react';

const RestDisplay = (props) => {
    const renderList = props.restdata.map((data) => {
        return(
            <div>
                <h3>{data.name}</h3>
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