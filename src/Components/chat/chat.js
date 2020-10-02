import React, { Component } from 'react';

import classes from './chat.css';
import { connect } from 'react-redux';

import * as actionCreators from './../../Store/action/index';

class chat extends Component{
    constructor(props){
        super();
        this.wholeChat = React.createRef();
    }

    componentDidUpdate(prevprops){
        if(prevprops.chats.length!==this.props.chats.length){
            this.wholeChat.current.scrollTop = this.wholeChat.current.scrollHeight - this.wholeChat.current.clientHeight;
        }
    }
    render(){
        let wholeChats = null;
        if(this.props.chats){
            wholeChats = this.props.chats.map((ele,index)=>{
                return <div className={classes.box} key={ele.time+index} >
                            <p className={ele.user_ID==="OTHER"?classes.other:classes.self}>{ele.message} <br/> <span>{ele.time}</span> </p>
                            <p className={classes.clearfix}>Where are you? <br/> <span>{ele.time}</span> </p>
                        </div>
            })
        };
        if(this.props.chats.length===0){
            wholeChats = <p className={classes.msg}>The messages to this chat is end to end encrypted.Means that data to this chat is private and we dont share that with anyone.You can start your chat to this number.</p>;
        }

        const send = ()=>{
            if(this.props.message.trim()!==""){
                let currenttime = new Date();
                currenttime = currenttime.toLocaleTimeString();
                this.props.chats.push({message:this.props.message,user_ID: "ME",time: currenttime});
                this.props.sendMessage();
                this.wholeChat.current.scrollTop = this.wholeChat.current.scrollHeight - this.wholeChat.current.clientHeight;
            }
        }

        return(
            <div className={classes.chatbox}>
                <div ref={this.wholeChat} className={classes.chat}>
                    {wholeChats}
                </div>
                <div className={classes.sendchat}><input onKeyDown={
                    (e)=>{
                        if(e.key==="Enter"){
                            send();
                        }
                    }
                }
                 className={classes.input} onChange={(e)=>{this.props.changeMessage(e)}} placeholder="Enter Your Text Here" value={this.props.message} /><p className={classes.send} 
                onClick = {send}
                    >Send</p></div>
            </div>
        );
    }
};

const mapStateToProps=(state)=>{
    return{
        message: state.sendmessage.message
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeMessage: (e)=>{dispatch(actionCreators.changeInputHandler(e))},
        sendMessage: ()=>{dispatch(actionCreators.sendMessageInputHandler())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(chat);