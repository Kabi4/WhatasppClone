import * as actionTypes from './../actionTypes';

const initalState = {
    name: "Kushagra Singh",
    about: "Hii There! i am using whatsapp.",
    nametemp: "Kushagra Singh",
    abouttemp: "Hii There! i am using whatsapp."
};

const UserProfileReducer = (state=initalState,action)=>{
    switch(action.type){
        case actionTypes.ONCHANGENAMEHANDLER:
            return{
                ...state,
                nametemp: action.payload.event.target.value
            };
        case actionTypes.ONCHANGEABOUTHANDLER:
            return{
                ...state,
                abouttemp: action.payload.event.target.value
            };
        case actionTypes.ONCONFIRMINPUTHANDLER:
            return{
                ...state,
                name: state.nametemp,
                about: state.abouttemp
            };
        case actionTypes.ONCANCELINPUTHANDLER:
            return{
                ...state,
                nametemp: state.name,
                abouttemp: state.about
            }
        default:
            return state;
    }
};

export default UserProfileReducer;