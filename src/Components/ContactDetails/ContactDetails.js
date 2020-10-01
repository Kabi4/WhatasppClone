import React from 'react';

import classes from './ContactDetails.css';

const ContactDetail = (props) => {
    return(
        <div className={classes.contactdetails}>
            <img onClick={props.clickpic} alt="Profile" src={props.photo}/>
            <div className={classes.about}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.lastseen}>{props.lastseen?props.lastseen:null}</p>
            </div>
            <p onClick={props.clicksearch} className={classes.search}>Search</p>
            <p onClick={props.clickpic}  className={classes.details}>Contact Details</p>
        </div>
    );
}

export default ContactDetail;