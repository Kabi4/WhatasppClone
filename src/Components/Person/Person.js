import React from 'react';

import classes from './Person.css';

import profile from './../../Assets/Person.jpg';

const Person = (props) => {
    let classPerson = [classes.person];
    if(props.active)classPerson.push(classes.active);
    return(
        <div className={classPerson.join(" ")}>
            <img src={profile} alt="chatImage" />
            <div className={classes.data}>
                <h2 className={classes.name}>{props.name}</h2>
                <div className={classes.detailmsg}> <p>{props.received?props.status:null}Read</p> <p className={classes.msg}>{props.lastmsg}</p></div>
            </div>
            <p className={classes.time}>{props.lastTime}</p>
        </div>
    );
}

export default Person;