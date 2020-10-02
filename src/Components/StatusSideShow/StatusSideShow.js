import React from 'react';

import classes from './StatusSideShow.css';

const StatusSideShow  = (props) =>{ 
    return(
        <div className={classes.statusSideShow}>
            <img src={props.imgArr[props.imgArr.length-1]} alt="status"/>
            <div className={classes.detials}>
                <p className={classes.heading}>{props.name}</p>
                <p>{props.lastTime}</p>
            </div>
        </div>
    )
}

export default StatusSideShow;