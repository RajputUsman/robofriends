import React, { Component } from "react";
import CardList from "./CardList";
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {

    constructor(){
        super()
        this.state = {
            searchField: '',
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            
            // this.setState({robots:users})
        })
    }

    onSearchChange = (e) => {
        this.setState({searchField:e.target.value});
        
    }

    render(){

        const filterRobots =  this.state.robots.filter(robot => 
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()
            ));  

    if(this.state.robots.length === 0){
        
        return <h1 className="tc f1 flex justify-center items-center vh-100"> Loading </h1>;
    } else{
        return(

            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots}/>
            </div>
            
        );
    }       

    
    }
}

export default App;