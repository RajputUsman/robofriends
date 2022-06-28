import React, { Component } from "react";
import CardList from "../components/CardList";
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
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
            
            this.setState({robots:users})
        })
    }

    onSearchChange = (e) => {
        this.setState({searchField:e.target.value});
        
    }

    render(){
        const {robots, searchField} = this.state;
        const filterRobots =  robots.filter(robot => 
            robot.name.toLowerCase().includes(searchField.toLowerCase()
            ));  
        
        // if the length is zero then Logical NOT convert the condition to true           
        return !robots.length ?
            
         <h1 className="f1 ma0 flex justify-center items-center vh-100"> Loading </h1>
        :(

                <div className="tc">
                    <h1 className="f1 mb3">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
                
        ); 
    
    }
}

export default App;