import React from 'react';
import Results from '../Results/Results';

import SearchBar from './../SearchBar/SearchBar';

import classes from './Sidesearch.css';

const Sidesearch = (props) =>{
    let search = null;
    let ourclass = [classes.sidesearch];
    if(props.selected){ourclass = [classes.active];
        search = <div key="sidesearch" className={ourclass}>
        <SearchBar/>
        <Results name={props.name}/>
    </div>
    }
    return(
        [search]
     );
};

export default Sidesearch;