import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Danilo', age: 37},
      {name: 'Amanda', age: 32},
      {name: 'Valentina', age: 1}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!!')
    // DON'T DO THIS: this.state.persons[0].name = 'Vieira';
    this.setState({
      persons: [
        {name: 'Dan', age: 37},
        {name: 'Amanda', age: 32},
        {name: 'Valentina', age: 2}
      ]
    })
  }

  render() {
    return (
      <div className="App">

        <h1>This is a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Robbies: handcrafting
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'This works now!!!'));
  }
}

export default App;
