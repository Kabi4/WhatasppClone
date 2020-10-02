import * as actionTypes from './../actionTypes';

const initialState = {
    name: "",
    about: "",
    number: "",
    lastseen: "",
    chat: [],
    element: null,
    activeClasses:""
};

const chatboxReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.CHANGECHATBOXONHANDLER:
            return{
                ...state,
                name:action.payload.name,
                about:action.payload.about,
                number:action.payload.number,
                lastseen:action.payload.lastseen,
                chat:action.payload.chat,
                element: action.payload.element,
                activeClasses: action.payload.activeClasses
            }
        default:
            return state;
    }
};

export default chatboxReducer;