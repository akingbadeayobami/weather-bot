const chatConstants = require("../constants/chat.contants");

const initial = {
    chat: []
};

const chat = (state = initial, action) => {

    if (action.type === chatConstants.GET_CHAT_MESSAGES) {
        return {...state, chat: action.payload };
    }

    if (action.type === chatConstants.POST_BOT_MESSAGE) {
        // append the message to chat for bot
        return {...state, chat: action.payload };
    }

    if (action.type === chatConstants.POST_USER_MESSAGE) {
        // append the message to chat for user
        return {...state, chat: action.payload };
    }

    return state;

};

export default chat;