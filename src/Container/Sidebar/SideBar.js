import React,{ Component } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Usernav from '../../Components/Usernav/Usernav';
import UserProfile from '../User_Profile/UserProfile';

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
                            <Usernav clickProfile={this.toggleShowProfile}/>
                            <div>searchBar</div>
                            <div>peoples</div>
                        </div>);
        if(this.state.showProfileDetails){
            sidebar = (<div className={classes.sidebar} key="sidebar"><Backdrop toogleEditing={this.toggleShowProfile} show={true}/> <UserProfile/></div>)
        }
        return(
            [sidebar]
        );
    }
}

export default SideBar;