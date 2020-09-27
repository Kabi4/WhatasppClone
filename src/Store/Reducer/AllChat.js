import * as actionTypes from '../actionTypes';

const intialState = {
    allChats: []
};

const allChatReducer = (state=intialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default allChatReducer;