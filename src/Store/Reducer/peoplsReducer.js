import * as actionTypes from './../actionTypes';

const intialState = {
    persons: []
};

const peoplsReducer = (state=intialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default peoplsReducer;