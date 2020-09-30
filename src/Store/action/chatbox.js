import * as actionTypes from './../actionTypes';

export const changeChatBox=(name,lastseen,about,number,chat)=>{
    return{
        type: actionTypes.CHANGECHATBOXONHANDLER,
        payload:{
            name,
            lastseen,
            about,
            number,
            chat
        }
    };
};