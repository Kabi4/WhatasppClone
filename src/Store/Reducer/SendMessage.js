import * as actionTypes from './../actionTypes';

const initialState = {
    message: "" 
}

const sendMessageReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.CHANGEMESSAGEINPUTHANDLER:
            return{
                ...state,
                message: action.payload.event.target.value
            }
        case actionTypes.SENDMESSAGEINPUTHANDLER:
            return{
                ...state,
                message: ""
            }
        default:
            return state;
    }
};

export default sendMessageReducer;