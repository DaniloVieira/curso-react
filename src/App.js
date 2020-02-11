import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>This is a react app</h1>
        <p>This is really working!</p>
        <Person name="Danilo" age="37"/>
        <Person name="Amanda" age="32">
          My Robbies: handcrafting
        </Person>
        <Person name="Valentina" age="1"/>
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'This works now!!!'));
  }
}

export default App;
