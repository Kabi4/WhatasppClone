import React from 'react';
import SideBar from '../../Container/Sidebar/SideBar';
import Toolbar from '../Toolbar/Toolbar';
import classes from './layout.css';

const Layout = (props) =>{
    return(
        <div className={classes.layout}>
            <Toolbar/>
            <SideBar/>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;