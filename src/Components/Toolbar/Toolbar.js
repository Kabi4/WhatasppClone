import React from 'react';
import Logo from './../../Assets/Logo.jpg';
import classes from './Toolbar.css';
const Toolbar = (props) =>{
    return(
        <div className={classes.toolbar}>
            <img className={classes.logo} src={Logo} alt="Logo"/>
            WhatsApp
        </div>
    );
};
export default Toolbar;