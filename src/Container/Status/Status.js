import React, { Component } from 'react';
import StatusSideShow from '../../Components/StatusSideShow/StatusSideShow';
import StatusView from '../../Components/StatusView/StatusView';

import Photo from './../../Assets/UserProfile.jpg';

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
                    <StatusSideShow imgArr={[Photo]} lastTime="40 min ago" name="MyStatus"/>
                    <h3 style={{cursor: "pointer"}}>RECENT</h3>
                    <StatusSideShow imgArr={[Photo]} lastTime="12 min ago" name="Pandu"/>
                    <StatusSideShow imgArr={[Photo]} lastTime="17 min ago" name="Unkown"/>
                    <StatusSideShow imgArr={[Photo]} lastTime="21 min ago" name="Qwerty"/>
                    <h3 style={{cursor: "pointer"}}>VIEWED</h3>
                    <StatusSideShow imgArr={[Photo]} lastTime="4 hours ago" name="Papa"/>
                    <h3 onClick={this.toggleHidden} style={{cursor: "pointer"}}>{this.state.hidden?"SHOW":"HIDE"}</h3>
                    {this.state.hidden?null:<StatusSideShow imgArr={[Photo]} lastTime="30 min ago" name="Mom"/>}
                </div>
                <div className={classes.viewPort}><StatusView src={this.props.source} time={this.props.time}/></div>
                <h1 onClick={this.props.toogleStatus}>X</h1>
            </div>
        );
    }
}

export default Status;