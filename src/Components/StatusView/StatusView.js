import React from 'react';

import classes from './StatusView.css';

import { connect } from 'react-redux';

const StatusView = (props) =>{
    let view = <div className={classes.viewport} key="StatusView"><p>Click To View Status</p></div>
    if(props.src!==""){
        view = <div className={classes.viewport} key="StatusView">
                    <span></span>
                    <img src={props.src} alt="status"/>
                    <h2>Posted {props.time}</h2>
                </div>;
    }
    return(
        [view]
    );
};

const mapStateToProps = (state)=>{
    return{
        src: state.status.src,
        time: state.status.lastTime
    }
}

export default connect(mapStateToProps,null)(StatusView);