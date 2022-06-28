import React, {Component} from "react";

class ErrorBoundry extends Component{

    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render(){
        return this.state.hasError ? <h1 className="f1 ma0 flex justify-center items-center vh-100">Can't Find any Robo Friends Right now</h1> : this.props.children
    }

}

export default ErrorBoundry;