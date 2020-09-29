import React, { Component } from 'react';

import classes from './AllChat.css';

import { connect } from 'react-redux';
import Person from '../../Components/Person/Person';

class Allchat extends Component{
    render(){
        return(
            <div className={classes.allChats}>
                <Person active={true} name="Kriti Sharma" lastmsg="kaisa h?" lastTime="9:10 PM"/>
                <Person name="Pandu" lastmsg="Bhai maine gand mrali!" lastTime="7:10 AM"/>
                <Person name="Unkown" lastmsg="Hey there?" lastTime="00:10 PM"/>
                <Person name="Howdy" lastmsg="where are you?" lastTime="2:10 AM"/>
                <Person name="+91-8293104132" lastmsg="Ok" lastTime="5:10 AM"/>
                <Person name="Sis" lastmsg="?" lastTime="6:10 PM"/>
                <Person name="+91-8949527177" lastmsg="" lastTime="7:10 AM"/>
                <Person name="AlTC" lastmsg="Received" lastTime="2:10 PM"/>
                <Person name="Shubham" lastmsg="Hey there!" lastTime="5:10 AM"/>
                <Person name="OYO" lastmsg="Are you there?" lastTime="8:10 PM"/>
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        allChats: state.allChat.allChats
    };
};

export default connect(mapStateToProps)(Allchat);