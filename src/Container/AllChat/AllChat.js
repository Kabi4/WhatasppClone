import React, { Component } from 'react';

import classes from './AllChat.css';

import { connect } from 'react-redux';
import Person from '../../Components/Person/Person';

class Allchat extends Component{
    render(){
        return(
            <div className={classes.allChats}>
                <Person chat={[]} lastseen="9:10 PM" about="NONE" number="9999999999"  name="Kriti Sharma" lastmsg="kaisa h?" lastTime="9:10 PM"/>
                <Person chat={[]} lastseen="7:10 AM" about="NONE" number="9999999999" name="Pandu" lastmsg="Bhai RCB on form!" lastTime="7:10 AM"/>
                <Person chat={[]} lastseen="00:10 PM" about="NONE" number="9999999999" name="Unkown" lastmsg="Hey there?" lastTime="00:10 PM"/>
                <Person chat={[]} lastseen="2:10 AM" about="NONE" number="9999999999" name="Howdy" lastmsg="where are you?" lastTime="2:10 AM"/>
                <Person chat={[]} lastseen="5:10 AM" about="NONE" number="9999999999" name="+91-8293104132" lastmsg="Ok" lastTime="5:10 AM"/>
                <Person chat={[]} lastseen="6:10 PM" about="NONE" number="9999999999" name="Sis" lastmsg="?" lastTime="6:10 PM"/> 
                <Person chat={[]} lastseen="7:10 AM" about="NONE" number="9999999999" name="+91-8949527177" lastmsg="" lastTime="7:10 AM"/>
                <Person chat={[]} lastseen="2:10 PM" about="NONE" number="9999999999" name="AlTC" lastmsg="Received" lastTime="2:10 PM"/>
                <Person chat={[]} lastseen="5:10 AM" about="NONE" number="9999999999" name="Shubham" lastmsg="Hey there!" lastTime="5:10 AM"/>
                <Person chat={[]} lastseen="8:10 PM" about="NONE" number="9999999999" name="OYO" lastmsg="Are you there?" lastTime="8:10 PM"/>
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