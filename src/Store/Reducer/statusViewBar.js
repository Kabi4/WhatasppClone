import * as actionTypes from './../actionTypes';

const initialState = {
    statusImages: [],
    src: "",
    lastViewedStatus: null,
    lastTime: "" 
}

const statusReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.VIEWSTATUSHANDLER:
            return{
                ...state,
                statusImages: action.payload.imgArr,
                src: action.payload.imgArr[action.payload.lastViewedStatus===action.payload.imgArr.length-1?0:action.payload.lastViewedStatus+1].src,
                lastViewedStatus: action.payload.lastViewedStatus===action.payload.imgArr.length-1?0:action.payload.lastViewedStatus+1,
                lastTime: action.payload.imgArr[action.payload.lastViewedStatus===action.payload.imgArr.length-1?0:action.payload.lastViewedStatus+1].time
            }
        case actionTypes.NEXTIMAGEVIEWER:
            const arr = [...state.statusImages];
            let curr = state.lastViewedStatus;
            return{
                ...state,
                src: arr[curr+1].src,
                lastViewedStatus: curr+1,
                lastTime: arr[curr+1].time
            }
        case actionTypes.ENDSTATUSVIEWER:
            return{
                ...state,
                statusImages: [],
                src: "",
                lastViewedStatus: null,
                lastTime: ""
            }
        default:
            return state;
    }
}

export default statusReducer;