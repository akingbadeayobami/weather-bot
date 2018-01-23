const { chatConstants } = require("../constants/chat.contants");

const initial = {
    chat: [],
    loading: false
};

const chat = (state = initial, action) => {

    if (action.type === chatConstants.GET_CHAT_MESSAGES) {
        return {...state, chat: action.payload };
    }

    if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE) {

        let loading;

        if (action.type === chatConstants.POST_BOT_MESSAGE) {
            loading = false;
        }

        if (action.type === chatConstants.POST_USER_MESSAGE) {
            loading = true;
        }

        return {
            ...state,
            chat: state.chat.concat(action.payload),
            loading: loading
        }

    }

    return state;

};

export default chat;