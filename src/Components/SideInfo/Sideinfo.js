import React from 'react';

import classes from './Sideinfo.css';

const Sideinfo = (props) =>{
    let ourclass = [classes.sideinfo];
    if(props.selected)ourclass = [classes.active];
    return(
        <div className={ourclass.join(" ")}>
            Sideinfo
        </div>
    );
};

export default Sideinfo;