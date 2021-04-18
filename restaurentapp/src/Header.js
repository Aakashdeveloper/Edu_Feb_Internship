import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(){
        super()

        this.state={
            username:'',
            imageurl:''
        }
    }

    conditionalHeader = () => {
        if(sessionStorage.getItem('username') == null || sessionStorage.getItem('username') == undefined){
            return(
                <a href='https://github.com/login/oauth/authorize?client_id=03d8f7d4a2a281cf18bd'>
                    Login With Git
                </a>
            )
        }else{
            return(
                <span>
                    <img src={sessionStorage.getItem('imageurl')} style={{height:50,width:50}}/>
                    {sessionStorage.getItem('username')}
                </span>
            )
        }
    }

    render(){
        return(
            <>
               <div id="header">
                        <Link className="logo" to="/">Edureka</Link>
                        <span className="leftopt" style={{float:'right'}}>
                        {this.conditionalHeader()}
                        </span>
                </div>
            </>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestedData={
                code:code
            }
            fetch('http://localhost:7800/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestedData)
            })
            .then((res) =>  res.json())
            .then((data) => {
                var user = data.name;
                var img = data.avatar_url;
                sessionStorage.setItem('username',user);
                sessionStorage.setItem('imageurl',img);
                this.setState({username:user,imageurl:img})
            })
        }
        
    }
    
}

export default withRouter(Header);