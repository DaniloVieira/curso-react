import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Danilo', age: 37},
      {name: 'Amanda', age: 32},
      {name: 'Valentina', age: 1}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Danilo', age: 37},
        {name: event.target.value, age: 32},
        {name: 'Valentina', age: 1}
      ]
    })
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
