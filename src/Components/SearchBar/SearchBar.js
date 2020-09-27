import React from 'react';

import {connect} from 'react-redux';

import * as actionCreators from './../../Store/action/index';

import classes from './SearchBar.css';

const SearchBar = (props) =>{
    return(
        <div className={classes.searchbar}>
            <input onChange={(e)=>{props.chngeValue(e)}} className={classes.input} value={props.value} placeholder={props.value!==""?props.value:"SEARCH"} />
            <i className={classes.search} onClick={props.search}>SEARCH</i>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        value: state.search.value
    };
};

const mapDispatchToProps = (dispatch)=>{
    return{
        chngeValue: (e)=>{dispatch(actionCreators.changeSearchInput(e))},
        search: ()=>{dispatch(actionCreators.searchHandler())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);