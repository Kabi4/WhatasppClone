import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './layout.css';

const Layout = (props) =>{
    return(
        <div className={classes.layout}>
            <Toolbar/>
            <div>sidebar</div>
            <main className={classes.main}>
                hello
                {props.children}
            </main>
        </div>
    );
}

export default Layout;