import React from 'react';

import classes from './StatusSideShow.css';

import { connect } from 'react-redux';

import * as actionCreators from './../../Store/action/index'; 

const StatusSideShow  = (props) =>{ 
    return(
        <div onClick={()=>{props.viewStatus(props.imgArr,props.lastViewStatus)}} className={classes.statusSideShow}>
            <img src={props.imgArr[props.imgArr.length-1].src} alt="status"/>
            <div className={classes.detials}>
                <p className={classes.heading}>{props.name}</p>
                <p>{props.imgArr[props.imgArr.length-1].time}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        viewStatus: (array,lastViewStatus)=>{dispatch(actionCreators.statusClickHandler(array,lastViewStatus))}
    }
}

export default connect(null,mapDispatchToProps)(StatusSideShow);