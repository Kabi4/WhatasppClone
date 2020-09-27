import React,{ Component } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Usernav from '../../Components/Usernav/Usernav';
import UserProfile from '../User_Profile/UserProfile';
import AllChat from '../AllChat/AllChat';

import {connect} from 'react-redux';

import classes from './SideBar.css';

class SideBar extends Component{
    state={
        showProfileDetails:false
    }
    toggleShowProfile=()=>{
        this.setState({showProfileDetails: !this.state.showProfileDetails})
    }
    render(){
        let sidebar = (<div className={classes.sidebar} key="sidebar">
                            <Usernav name={this.props.name} clickProfile={this.toggleShowProfile}/>
                            <SearchBar/>
                            <AllChat/>
                        </div>);
        if(this.state.showProfileDetails){
            sidebar = (<div className={classes.sidebar} key="sidebar"><Backdrop toogleEditing={this.toggleShowProfile} show={true}/> <UserProfile/></div>)
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