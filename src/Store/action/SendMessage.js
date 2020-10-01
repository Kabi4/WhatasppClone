import * as actionTypes from './../actionTypes';

export const changeInputHandler = (e)=>{
    return{
        type: actionTypes.CHANGEMESSAGEINPUTHANDLER,
        payload:{
            event:e
        }
    }
};

const sendMessage = () =>{
    return{
        type: actionTypes.SENDMESSAGEINPUTHANDLER
    }
}

export const sendMessageInputHandler = ()=>{
    return dispatch=>{
        dispatch(sendMessage())
    }
}