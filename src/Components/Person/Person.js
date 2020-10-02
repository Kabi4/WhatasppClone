import React from 'react';

import classes from './Person.css';

import profile from './../../Assets/Person.jpg';
import * as actionCreators from './../../Store/action/index';

import {connect} from 'react-redux';

const Person = (props) => {
    let classPerson = [classes.person];
    return(
        <div className={classPerson.join(" ")} ref={(e)=>{ this[props.name] = e}} onClick={()=>{this[props.name].classList.add(classes.active); props.changeChatHandler(props.name,props.lastseen,props.about,props.number,props.chat,this[props.name],classes.active)}}>
            <img src={profile} alt="chatImage" />
            <div className={classes.data}>
                <h2 className={classes.name}>{props.name}</h2>
                <div className={classes.detailmsg}> <p>{props.received?props.status:null}Read</p> <p className={classes.msg}>{props.lastmsg}</p></div>
            </div> 
            <p className={classes.time}>{props.lastTime}</p>
        </div>
    );
};


const mapDispatchToprops = (dispatch)=>{
    return{
        changeChatHandler: (name,lastseen,about,number,chat,ele,activeClasses)=>{dispatch(actionCreators.changeChatBox(name,lastseen,about,number,chat,ele,activeClasses))}
    }
}

export default connect(null,mapDispatchToprops)(Person);