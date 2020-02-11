import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personState, setPersonState] = useState ({
    persons: [
      {name: 'Danilo', age: 37},
      {name: 'Amanda', age: 32},
      {name: 'Valentina', age: 1}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked!!')
    // DON'T DO THIS: this.state.persons[0].name = 'Vieira';
    setPersonState({
      persons: [
        {name: 'Dan', age: 37},
        {name: 'Amanda', age: 32},
        {name: 'Valentina', age: 2}
      ]
    })
  }
  
  return (
    <div className="App">

      <h1>This is a react app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>
        My Robbies: handcrafting
      </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'This works now!!!'));
}


export default app;
