import * as actionType from './../actionTypes';

export const changeSearchInput = (e)=>{
    return{
        type: actionType.ONCHANGESEARCHANGEHANDLER,
        payload:{
            event: e
        }
    };
};

export const searchHandler = ()=>{
    return dispatch=>{
        console.log("Searching......")
    }
}