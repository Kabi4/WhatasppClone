import * as actionType from './../actionTypes';

const intialState = {
    value: ""
};

const searchBarReducer = (state=intialState,action) =>{
    switch(action.type){
        case actionType.ONCHANGESEARCHANGEHANDLER:
            return{
                ...state,
                value: action.payload.event.target.value
            }
        default:
            return state;
    }
};

export default searchBarReducer;