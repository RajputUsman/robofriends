import React, { Component } from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';



class App extends Component {

    constructor(){
        super()
        this.state = {
            searchField: '',
            robots: robots
        }
    }

    onSearchChange = (e) => {
        this.setState({searchField:e.target.value});
        
    }

    render(){

        const filterRobots =  this.state.robots.filter(robot => 
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()
            ));  

    return(

        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList robots={filterRobots}/>
        </div>
        
    );
    }
}

export default App;