const { chatConstants } = require("../constants");

const initial = {
    chat: [],
    loading: false,
    session_id: 1
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

    if (action.type === chatConstants.NEW_CHAT_SESSION) {

        return {
            ...state,
            chat: [],
            session_id: action.payload.session_id
        }

    }

    return state;

};

export default chat;