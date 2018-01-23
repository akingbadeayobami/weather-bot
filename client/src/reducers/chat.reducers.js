const { chatConstants } = require("../constants/chat.contants");

const initial = {
    chat: []
};

const chat = (state = initial, action) => {

    if (action.type === chatConstants.GET_CHAT_MESSAGES) {
        return {...state, chat: action.payload };
    }

    if (action.type === chatConstants.POST_MESSAGE) {

        return {
            ...state,
            chat: state.chat.concat(action.payload)
        }

    }


    return state;

};

export default chat;