const { chatConstants } = require("../constants");

const initial = {
    chat: [],
    loading: false,
    session_id: 1
};

const chat = (state = initial, action) => {

    // Setting Chats
    if (action.type === chatConstants.GET_CHAT_MESSAGES) {
        return {...state, chat: action.payload };
    }

    // Update the loading indicator and append the new message
    if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE) {

        let loading;

        // If message is from bot then hide the loading indicator 
        if (action.type === chatConstants.POST_BOT_MESSAGE) {
            loading = false;
        }

        // If message is from user then show the loading indicator       
        if (action.type === chatConstants.POST_USER_MESSAGE) {
            loading = true;
        }

        return {
            ...state,
            chat: state.chat.concat(action.payload),
            loading: loading
        }

    }

    // Clear All Chat Messages And Update The New Session ID
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