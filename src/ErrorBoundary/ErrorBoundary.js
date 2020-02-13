import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasErros: false
    }

    componentDidCatch = (error, info) => {
        this.setState({hasErros : true, erroRmessage: error});
    }

    render (){
        if(this.state.hasErros){
            return <h1>Something whent wrong!!!!</h1>
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;