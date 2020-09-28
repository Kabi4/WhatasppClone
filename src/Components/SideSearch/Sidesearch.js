import React from 'react';

import classes from './Sidesearch.css';

const Sidesearch = (props) =>{
    let ourclass = [classes.sidesearch];
    if(props.selected)ourclass = [classes.active];
    return(
        <div className={ourclass.join(" ")}>
            SIDESEARCH
        </div>
     );
};

export default Sidesearch;