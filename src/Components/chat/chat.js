import React, { Component } from 'react';

import classes from './chat.css';

class chat  extends Component{
    constructor(props){
        super();
        this.wholeChat = React.createRef();
    }
    componentDidMount(){
        this.wholeChat.current.scrollTop = this.wholeChat.current.scrollHeight - this.wholeChat.current.clientHeight;
    }
    render(){
        return(
            <div className={classes.chatbox}>
                <div ref={this.wholeChat} className={classes.chat} id="chat">
                    <div className={classes.box}>
                        <p className={classes.other}>Where are you? <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Where are you? <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins! <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins!Ariving in 5 mins! <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>Ok will meet you there. <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Ok will meet you there. <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>See you Soon! <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>See you Soon! <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>where to go? <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>where to go? <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>Why dont you die?? <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Why dont you die?? <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>gauchar chle? <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>gauchar chle? <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>Nahi m ni ara <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Nahi m ni ara <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>m chowmein khilaunga <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>m chowmein khilaunga <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>do minute jacket daal lu! <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>do minute jacket daal lu! <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>ok! <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>ok! <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>kaha h <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>kaha h <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>Sandy <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>Sandy <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>theek ara m <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>theek ara m <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>ok aja <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>ok aja <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>paise laya na <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>paise laya na <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>ha bhai laya hu <br/> <span>{this.props.time}</span> </p>
                        <p className={classes.clearfix}>ha bhai laya hu <br/> <span>{this.props.time}</span> </p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.other}>gpay h <br/> <span>{this.props.time}</span></p>
                        <p className={classes.clearfix}>gpay h <br/> <span>{this.props.time}</span></p>
                    </div>
                    <div className={classes.box}>
                        <p className={classes.self}>ok <br/> <span>{this.props.time}</span></p>
                        <p className={classes.clearfix}>ok <br/> <span>{this.props.time}</span></p>
                    </div>
                </div>
                <div className={classes.sendchat}><input className={classes.input} placeholder="Enter Your Text Here" value="" /><p className={classes.send}>Send</p></div>
            </div>
        );
    }
};

export default chat;