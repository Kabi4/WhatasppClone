import React, { Component } from 'react';
import Chat from '../../Components/chat/chat';
import ContactDetail from '../../Components/ContactDetails/ContactDetails';
import Sideinfo from '../../Components/SideInfo/Sideinfo';
import Sidesearch from '../../Components/SideSearch/Sidesearch';
import Backdrop from './../../Components/Backdrop/Backdrop';
import classes from './Chatbox.css';

import Photo from './../../Assets/Person.jpg'

import {connect} from 'react-redux';

class Chatbox extends Component{
    state = {
        sideinfo: false,
        sidesearch: false
    };

    UNSAFE_componentWillUpdate(){
        if(this.props.element){
            this.props.element.classList.remove(this.props.activeClasses);
        }

    }

    tooglesideInfo = () =>{
        this.setState({sideinfo: !this.state.sideinfo})
    };

    tooglesideSearch = () =>{
        this.setState({sidesearch: !this.state.sidesearch})
    };

    setFalse = () =>{
        this.setState({sideinfo: false,sidesearch: false})
    }

    render(){
        let chattingarea = <div key="chattingarea" className={classes.chatbox}></div>;
        if(this.props.name!==""){
            chattingarea = <div key="chattingarea" className={classes.chatbox}>
            <ContactDetail photo={Photo} clickpic={this.tooglesideInfo} clicksearch={this.tooglesideSearch} name={this.props.name} lastseen={this.props.lastseen}/>
            <Chat chats={this.props.chats} />
            <Backdrop show={this.state.sideinfo||this.state.sidesearch} toogleEditing={this.setFalse}/>
            <Sideinfo photo={Photo} name={this.props.name} about={this.props.about} number={this.props.number}  selected={this.state.sideinfo}/>
            <Sidesearch  selected={this.state.sidesearch}  name={this.props.name}/>
        </div>
        }
        return(
            [chattingarea]
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        name: state.chatbox.name,
        number: state.chatbox.number,
        lastseen: state.chatbox.lastseen,
        about: state.chatbox.about,
        chats: state.chatbox.chat,
        element: state.chatbox.element,
        activeClasses: state.chatbox.activeClasses
    }
}

export default connect(mapStateToProps)(Chatbox);