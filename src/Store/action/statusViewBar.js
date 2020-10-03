import * as actionTypes from './../actionTypes';

let timeOuts;

const statusViewStarted = (imgArr,lastViewedStatus)=>{
    return{ 
        type: actionTypes.VIEWSTATUSHANDLER,
        payload: {
            imgArr,
            lastViewedStatus
        }
    }
}

export const statusClickHandler = (imgArr,lastViewedStatus)=>{
    return dispatch=>{
        clearTimeout(timeOuts);
        dispatch(statusViewStarted(imgArr,lastViewedStatus));
        timeOuts = setTimeout(()=>{
            dispatch(nextStatusOrExit(imgArr.length,lastViewedStatus===(imgArr.length-1)?0:lastViewedStatus+1));
        },2000)
    }
}

const exitStatus = ()=>{
    return{
        type: actionTypes.ENDSTATUSVIEWER
    }
}

export const exitStatusView = ()=>{
    return dispatch=>{
        clearTimeout(timeOuts);
        dispatch(exitStatus());
    }
}

const nextStatus = () =>{
    return{
        type: actionTypes.NEXTIMAGEVIEWER
    }
}

export const nextStatusView = (Length,lastViewedNumber)=>{
    return dispatch=>{
        dispatch(nextStatus());
        timeOuts = (setTimeout(()=>{
            dispatch(nextStatusOrExit(Length,lastViewedNumber));
        },2000))
    }
}

const nextStatusOrExit = (length,lastViewedNumber)=>{
    return dispatch=>{
        if(length-1===lastViewedNumber){
            dispatch(exitStatusView());
        }else{
            dispatch(nextStatusView(length,lastViewedNumber+1));
        }
    }
}