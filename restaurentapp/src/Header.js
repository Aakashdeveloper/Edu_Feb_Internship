import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header =(props) => {
    return(
        <>
           <div id="header">
                    <Link className="logo" to="/">Edureka</Link>
                    <span className="leftopt" style={{float:'right'}}>Developer Funnel</span>
            </div>
        </>
    )
}

export default Header;