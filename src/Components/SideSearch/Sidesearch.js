import React from 'react';
import Results from '../Results/Results';

import SearchBar from './../SearchBar/SearchBar';

import classes from './Sidesearch.css';

const Sidesearch = (props) =>{
    let ourclass = [classes.sidesearch];
    if(props.selected)ourclass = [classes.active];
    return(
        <div className={ourclass}>
            <SearchBar/>
            <Results name="Nobita"/>
        </div>
     );
};

export default Sidesearch;