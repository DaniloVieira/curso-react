import React, {Component} from 'react';

import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // DON'T USE, IT'S TO BE REMOVED ON NEXT VERSIONS
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    
    // Ex: save de the croll position to use it after an update on the components
    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('[Persons.js] shouldComponentUpdate');
        return {message: 'snapshot!', prevProp: prevProp, prevState: prevState};
    }
    
    componentDidUpdate(prevProp, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {        
            return (
                <Person 
                    key={person.id} 
                    name={person.name} 
                    age={person.age}
                    change={(event) => this.props.changed(event, person.id)}
                    click= {()      => this.props.clicked(index)}
                />
            )
        });
    }    
};

export default Persons;
 