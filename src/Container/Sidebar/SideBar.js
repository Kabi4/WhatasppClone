import React,{ Component } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Usernav from '../../Components/Usernav/Usernav';
import UserProfile from '../User_Profile/UserProfile';
import AllChat from '../AllChat/AllChat';

import {connect} from 'react-redux';

import classes from './SideBar.css';
import Status from '../Status/Status';

class SideBar extends Component{
    state={
        showProfileDetails:false,
        showStatus: false
    }
    toggleShowProfile=()=>{
        this.setState({showProfileDetails: !this.state.showProfileDetails})
    }
    toggleshowStatus=()=>{
        this.setState({showStatus: !this.state.showStatus})
    }
    render(){
        let sidebar = (<div className={classes.sidebar} key="sidebar">
                            <Usernav name={this.props.name} clickStatus={this.toggleshowStatus} clickProfile={this.toggleShowProfile}/>
                            <SearchBar/>
                            <AllChat/>
                        </div>);
        if(this.state.showProfileDetails){
            sidebar = (<div style={{padding: "0"}} className={classes.sidebar} key="sidebar"><Backdrop toogleEditing={this.toggleShowProfile} show={true}/> <UserProfile/></div>);
        }
        if(this.state.showStatus){
            sidebar = (<div style={{padding: "0"}} className={classes.sidebar} key="sidebar"><Backdrop toogleEditing={this.toggleshowStatus} show={true}/> <Status toogleStatus={this.toggleshowStatus}/> </div>);
        }
        return(
            [sidebar]
        );
    }
};

const mapStateToProps = (state)=>{
    return{
        name: state.userProfile.name
    }
}

export default connect(mapStateToProps,null)(SideBar);