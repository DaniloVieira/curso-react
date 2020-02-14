import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Danilo', age: 37},
      {id:2, name: 'Amanda', age: 32},
      {id:3, name: 'Valentina', age: 1}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    //const person = Object.assign({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });

  }

  render() {
    let persons = null;    
    if(this.state.showPersons){
      persons = (
         <Persons persons={this.state.persons} changed={this.nameChangeHandler} clicked={this.deletePersonHandler}/>          
      )
    }   

    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'This works now!!!'));
  }
}

export default App;
