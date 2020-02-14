import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                      key={person.id}
                      change={(event) => this.nameChangeHandler(event, person.id)}
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}/>
          })}
        </div>
      )
      //btnClass.push(classes.Red);
      btnClass = classes.Red
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      
        <div className={classes.App}>
          <h1>This is a react app</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
            className={btnClass}
            // Most used way to pass a mathod receiving a parameter
            onClick={this.togglePersonHandler}>
            Toggle
          </button>
          {persons}
        </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'This works now!!!'));
  }
}

export default App;
