import React from 'react';

import classes from './Person.css';
const person = (props) => {
    const rdn = Math.random();
    if(rdn > 0.7){
        throw new Error('Something went wrong!!!')
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and I'm {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}
export default person;