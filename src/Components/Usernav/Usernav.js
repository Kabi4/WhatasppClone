import React from 'react';

import classes from './Usernav.css'

import ProfilePhoto from './../../Assets/UserProfile.jpg'

const Usernav = (props) =>{
    let UserDetail = [<div className={classes.userDetials} key="userdetails">
        <img className={classes.image} onClick={props.clickProfile} src={ProfilePhoto} alt="Profile"/>
        <p>{props.name}</p>
        <div className={classes.icons}>
            <div onClick={props.clickStatus}>STATUS</div>
            <div>NEW CHAT</div>
        </div>
    </div>];
    return(
        [UserDetail]
    );
};

export default Usernav;