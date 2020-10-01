import React from 'react';

import classes from './Sideinfo.css';

const Sideinfo = (props) =>{
    let info = null;
    let ourclass = [classes.sideinfo];
    if(props.selected){ourclass = [classes.active];
        info = <div key="sideinfo" className={ourclass}>
        <div className={classes.profileandname}>
            <h1 style={{display: "block",textAlign: "center",fontSize: "30px",color: "lightgreen",padding: "1rem 4px"}}>Profile & Name</h1>
            <img className ={classes.image} alt="Profile" src={props.photo} />
            <p className={classes.name}>{props.name}</p>
        </div>
        <div className={classes.aboutandnumber}>
            <h1 style={{display: "block",textAlign: "center",fontSize: "30px",color: "lightgreen",padding: "1rem 4px"}}>About & Number</h1>
            <p className={classes.about}>{props.about}</p>
            <p className={classes.number}>{props.number}</p>
        </div>
    </div>
    };
    return(
        [info]
    );
};

export default Sideinfo;