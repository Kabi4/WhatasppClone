import React, { Component } from 'react';

import classes from './StatusView.css';

import Aux from './../../HOC Components/Auxillary';

import { connect } from 'react-redux';

class StatusView extends Component{
    constructor(props){
        super();
        this.imgComp = React.createRef();
    }

    shouldComponentUpdate(props){
        return this.props.src!==props.src;
    }
    componentDidUpdate(){
                if(this.imgComp.current.classList!==0){this.imgComp.current.classList.remove(classes.myspan);}
        if(this.imgComp.current && this.props.src!==""){setTimeout(()=>{this.imgComp.current.classList.add(classes.myspan)},0)}
    }
    render(){
        let view = <p>Click To View Status</p>
        if(this.props.src!==""){
            view =<Aux><img src={this.props.src} alt="status"/>
            <h2>Posted {this.props.time}</h2></Aux>
        }
        return(
            <div className={classes.viewport} key="StatusView">
                    <span ref={this.imgComp}></span>
                    {view}
            </div>
        );
    }
};

const mapStateToProps = (state)=>{
    return{
        src: state.status.src,
        time: state.status.lastTime
    }
}

export default connect(mapStateToProps,null)(StatusView);