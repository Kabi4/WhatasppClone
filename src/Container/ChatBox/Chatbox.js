import React, { Component } from 'react';
import Chat from '../../Components/chat/chat';
import ContactDetail from '../../Components/ContactDetails/ContactDetails';
import Sideinfo from '../../Components/SideInfo/Sideinfo';
import Sidesearch from '../../Components/SideSearch/Sidesearch';
import Backdrop from './../../Components/Backdrop/Backdrop';
import classes from './Chatbox.css';

class Chatbox extends Component{
    state = {
        sideinfo: false,
        sidesearch: false
    };

    componentDidMount(){
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
        return(
            <div className={classes.chatbox}>
                <ContactDetail clickpic={this.tooglesideInfo} clicksearch={this.tooglesideSearch} name="Nobita" lastseen="9:10 am"/>
                <Chat time="05:02 pm" />
                <Backdrop show={this.state.sideinfo||this.state.sidesearch} toogleEditing={this.setFalse}/>
                <Sideinfo name="Nobita" about="DeadMan" number="+91 81267 05777"  selected={this.state.sideinfo}/>
                <Sidesearch  selected={this.state.sidesearch} />
            </div>
        );
    };
};

export default Chatbox;