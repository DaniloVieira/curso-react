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
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('save data to cloud!!!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] clenaup work in useEffect');
        }
    }, [props.persons]);
    // this second paramter makes this useEffect execute only when persons changes
    // when using an empty array "[]" it executes once before de compoent renders

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clenaup work in 2nd useEffect');
        }

    })

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses(props.personsLength)}>This is really working!</p>
            <button 
                className={btnClass(props.showPersons)}
                onClick={props.clicked}>
                    Toggle
            </button>
        </div>
    );
};

export default React.memo(cockpit);