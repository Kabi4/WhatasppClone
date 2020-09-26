import React, { Component } from 'react';
import ProfilePhoto from './../../Assets/UserProfile.jpg';
import * as actionCreators from '../../Store/action/index';

import { connect } from 'react-redux';
import EditableInput from '../../Components/editableInput/editableInput';

import classes from './UserProfile.css';
import Backdrop from '../../Components/Backdrop/Backdrop';

class UserProfile extends Component{
    state={
        seeProfile: false,
        editingName: false,
        editingAbout: false 
    };
    toggleSeeProfile=()=>{
        this.setState({seeProfile: !this.state.seeProfile})
    };
    toggleEditingName=()=>{
        this.setState({editingName: !this.state.editingName})
    };
    toggleEditingAbout=()=>{
        this.setState({editingAbout: !this.state.editingAbout})
    };
    
    render(){
        let User = (<div key="USERPROFILE" className={classes.userProfile}>
            <div className={classes.photo}>
                <img onClick={this.toggleSeeProfile} src={ProfilePhoto} alt="Profile" />
            </div>
            <EditableInput updateValue={this.props.confirmChange} toogleEditing={this.toggleEditingName} editingMode={this.state.editingName} title={"Your Name"}  cancelChange={this.props.cancelChange} value={this.props.name} changehandler={(e)=>{this.props.chngeName(e);}} />
            <EditableInput updateValue={this.props.confirmChange} toogleEditing={this.toggleEditingAbout} editingMode={this.state.editingAbout} title={"About"}  cancelChange={this.props.cancelChange} value={this.props.about} changehandler={(e)=>{this.props.chngeabout(e);}} />
        </div>);
        if(this.state.seeProfile){
            User = (<div key="USERPROFILE" className={classes.userProfile}>
                <Backdrop toogleEditing={this.toggleSeeProfile} show={true} />
                <img className={classes.showPhto} onClick={this.toggleSeeProfile} src={ProfilePhoto} alt="Profile" />
            </div>);
        }
        return(
            [User]
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        name: state.userProfile.nametemp,
        about: state.userProfile.abouttemp
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        chngeName: (e)=>{dispatch(actionCreators.namechngeHandler(e))},
        chngeabout: (e)=>{dispatch(actionCreators.aboutChngeHandler(e))},
        confirmChange: ()=>{dispatch(actionCreators.confirmInputChange())},
        cancelChange: ()=>{dispatch(actionCreators.cancelInputChange())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);