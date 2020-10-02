import React from 'react';

import classes from './StatusView.css';

const StatusView = (props) =>{
    let view = <div className={classes.viewport} key="StatusView"><p>Click To View Status</p></div>
    if(props.imgArr){
        view = <div className={classes.viewport} key="StatusView">
            <span style={{animation:  "moveLeft "+ props.imgArr?props.imgArr.length*2:2 + "s linear forwards"}}></span>
        <img src={props.src} alt="status"/></div>;
    }
    return(
        [view]
    );
};

export default StatusView;