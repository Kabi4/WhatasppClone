import React from 'react';

import classes from './Usernav.css'

import ProfilePhoto from './../../Assets/UserProfile.jpg'

const Usernav = (props) =>{
    let UserDetail = [<div key="userdetails">
        <img className={classes.image} onClick={props.clickProfile} src={ProfilePhoto} alt="Profile"/>
    </div>];
    return(
        [UserDetail]
    );
};

export default Usernav;