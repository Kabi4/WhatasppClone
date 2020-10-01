import React, { Component } from 'react';
import StatusView from '../../Components/StatusView/StatusView';

import classes from './Status.css';

class Status extends Component{
    render(){
        return(
            <div className={classes.status}>
                <div>MyStatus</div>
                <div>All Status</div>
                <div>Muted Status</div>
                <div className={classes.viewPort}><StatusView src={this.props.source} time={this.props.time}/></div>
            </div>
        );
    }
}

export default Status;