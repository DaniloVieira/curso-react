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

  switchNameHandler = (name) => {
    // console.log('was clicked!!')
    // DON'T DO THIS: this.state.persons[0].name = 'Vieira';
    this.setState({
      persons: [
        {name: name, age: 37},
        {name: 'Amanda', age: 32},
        {name: 'Valentina', age: 2}
      ]
    })
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });

  }

  render() {

    const styleButton = {
      'background-color': 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            // An alternative way of passing a method receiveing a parameter
            click={() => this.switchNameHandler('Dan!!')}
            change={this.nameChangeHandler}>
            My Robbies: handcrafting
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
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
