const { sessionConstants, chatConstants } = require("../constants");
const _ = require('lodash');

const initial = {
    session: []
};

const session = (state = initial, action) => {

    // Setting All Sessions
    if (action.type === sessionConstants.GET_ALL_SESSION) {
        return {...state, session: action.payload };
    }

    // Update Session's Last Message On New Message
    if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE || action.type === chatConstants.NEW_CHAT_SESSION) {

        const newMessage = action.payload;

        // Check if the sessionId Already exists
        const sessionIndex = _.findIndex(state.session, { session_id: newMessage.session_id })

        // if it doesn't, then we want to create new session
        if (sessionIndex === -1) {

            state.session = state.session.concat(newMessage);

            // if it does, Then we want to update the last message
        } else {

            state.session[sessionIndex] = newMessage;

        }

        return {...state };
    }

    return state;

};

export default session;