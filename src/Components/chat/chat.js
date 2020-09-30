import React, { Component } from 'react';

import classes from './chat.css';

class chat extends Component{
    constructor(props){
        super();
        this.wholeChat = React.createRef();
    }
    componentDidMount(){
        this.wholeChat.current.scrollTop = this.wholeChat.current.scrollHeight - this.wholeChat.current.clientHeight;
    }
    render(){
        let wholeChats = null;
        if(this.props.chats){
            wholeChats = this.props.chats.map(ele=>{
                return <div className={classes.box}>
                            <p className={ele.user_ID===this.props.user_ID?classes.other:classes.self}>{ele.message} <br/> <span>{ele.time}</span> </p>
                            <p className={classes.clearfix}>Where are you? <br/> <span>{ele.time}</span> </p>
                        </div>
            })
        };
        if(this.props.chats.length===0){
            wholeChats = <p className={classes.msg}>The messages to this chat is end to end encrypted.Means that data to this chat is private and we dont share that with anyone.You can start your chat to this number.</p>;
        }
        return(
            <div className={classes.chatbox}>
                <div ref={this.wholeChat} className={classes.chat}>
                    {wholeChats}
                </div>
                <div className={classes.sendchat}><input className={classes.input} placeholder="Enter Your Text Here" value="" /><p className={classes.send}>Send</p></div>
            </div>
        );
    }
};

export default chat;