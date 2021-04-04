import React from 'react';

const RestDetails = (props) => {
    console.log(props)
    return(
        <div>
            <h1>RestDetails Page</h1>
            <h2>{props.match.params.restname}</h2>
        </div>
        
    )
}

export default RestDetails