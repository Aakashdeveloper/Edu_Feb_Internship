import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(){
        super()

        this.state={
           title:'React App',
           userInput:'User Text Here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:'User Text Here'})
    }

    render(){
        console.log(">>>>>>>>in render>>>>>>>>>")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white'}}>{this.state.userInput}</div>
                </center>
                <hr/>
            </header>
        )
    }
    
}

export default Header;


/*
const Header = () => {
    return(
        <div>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </div>
    )
}
*/