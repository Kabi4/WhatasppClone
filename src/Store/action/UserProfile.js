import * as actionTypes from './../actionTypes';

export const namechngeHandler = (e)=>{
    return{
        type: actionTypes.ONCHANGENAMEHANDLER,
        payload: {
            event: e
        }
    }
}

export const confirmInputChange = ()=>{
    return{
        type: actionTypes.ONCONFIRMINPUTHANDLER
    }
}

export const cancelInputChange = ()=>{
    return{
        type: actionTypes.ONCANCELINPUTHANDLER
    }
}

export const aboutChngeHandler = (e)=>{
    return{
        type: actionTypes.ONCHANGEABOUTHANDLER,
        payload: {
            event: e
        }
    }
}