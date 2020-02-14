import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const assignedClasses = (length) => {
    const arr = [];
    if(length <= 2){
        arr.push(classes.red);
    }
    if(length <= 1){
        arr.push(classes.bold);
    }
    return arr.join(' ');
} 

const btnClass = showPersons => showPersons ? classes.Red : '';  

const cockpit = (props) => {    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses(props.persons.length)}>This is really working!</p>
            <button 
                className={btnClass(props.showPersons)}
                onClick={props.clicked}>
                    Toggle
            </button>
        </div>
    );
};

export default cockpit;