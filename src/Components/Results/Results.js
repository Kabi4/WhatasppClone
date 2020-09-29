import React from 'react';

import classes from './Results.css';

const Results = (props) =>{
    let resultss = <div style={{display: "block"}}>Search For Messages with {props.name}</div>; 
    if(props.results){
        resultss = props.results.map(ele=>{
            return <div className={classes.result}>ele</div>
            })}
    return(
        <div className={classes.results}>
            {resultss}
        </div>
    );
}

export default Results;