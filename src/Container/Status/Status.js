import React, { Component } from 'react';
import StatusSideShow from '../../Components/StatusSideShow/StatusSideShow';
import StatusView from '../../Components/StatusView/StatusView';

import i1 from './../../Assets/MyStatus/Image.jpg';
import i2 from './../../Assets/MyStatus/Image1.jpg';

import i3 from './../../Assets/Pandu/Image.jpg';
import i4 from './../../Assets/Pandu/Image1.jpg';

import i5 from './../../Assets/Papa/Image.jpg';
import i6 from './../../Assets/Papa/Image1.png';

import i7 from './../../Assets/Mom/Image.jpg';
import i8 from './../../Assets/Mom/Image.jpg';

import classes from './Status.css';

class Status extends Component{
    state={
        hidden: true
    }
    toggleHidden=()=>{ 
        this.setState({hidden: !this.state.hidden});
    }
    render(){
        return(
            <div className={classes.status}>
                <div>
                    <StatusSideShow imgArr={[{src: i1,time: "40 mins ago"},{src: i2,time: "60 mins ago"}]} lastViewStatus={-1} name="MyStatus"/>
                    <h3 style={{cursor: "pointer"}}>RECENT</h3>
                    <StatusSideShow imgArr={[{src: i3,time: "40 mins ago"},{src: i4,time: "12 mins ago"}]} lastViewStatus={-1} name="Pandu"/>
                    <h3 style={{cursor: "pointer"}}>VIEWED</h3>
                    <StatusSideShow imgArr={[{src: i5,time: "40 mins ago"},{src: i6,time: "4 hours ago"}]} lastViewStatus={1} name="Goli"/>
                    <h3 onClick={this.toggleHidden} style={{cursor: "pointer"}}>{this.state.hidden?"SHOW":"HIDE"}</h3>
                    {this.state.hidden?null:<StatusSideShow imgArr={[{src: i7,time: "40 mins ago"},{src: i8,time: "30 mins ago"}]} lastViewStatus={0} name="Kriti"/>}
                </div>
                <div className={classes.viewPort}><StatusView/></div>
                <h1 onClick={this.props.toogleStatus}>X</h1>
            </div>
        );
    }
}



export default Status;