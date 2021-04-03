import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import RestDisplay from './RestDisplay'

class Home extends Component {
    constructor(){
        super()

        this.state={
            restList:JSON
        }
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <Header/>
                <RestDisplay restdata={this.state.restList}/>
                <Footer year={2021} month={'April'}/>
            </div>
        )
    }
    
}

export default Home;