import React from 'react';

import classes from './Cockpit.css';

//const teste = (arg) => console.log('teste', arg);

const cockpit = (props) => {    
    let btnClass = props.showPersons ? classes.Red : '';
    
    const assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            {/* {teste('argTeste!!!!')} */}
            <h1>This is a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                    Toggle
            </button>
        </div>
    );
};

export default cockpit;