import * as actionTypes from './../actionTypes';

export const changeChatBox=(name,lastseen,about,number,chat,element,activeClasses)=>{
    return{
        type: actionTypes.CHANGECHATBOXONHANDLER,
        payload:{
            name,
            lastseen,
            about,
            number,
            chat,
            element,
            activeClasses
        }
    };
};