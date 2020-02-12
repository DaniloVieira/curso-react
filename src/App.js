import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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
    }

    return (
      <div className="App">

        <h1>This is a react app</h1>
        <p>This is really working!</p>
        <button style={styleButton}
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
