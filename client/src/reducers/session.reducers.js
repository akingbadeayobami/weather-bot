const { sessionConstants, chatConstants } = require("../constants");
const _ = require('lodash');

const initial = {
    session: []
};

const session = (state = initial, action) => {

    if (action.type === sessionConstants.GET_HISTORY) {
        return {...state, session: action.payload };
    }

    if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE) {

        const newMessage = action.payload;

        const sessionIndex = _.findIndex(state.session, { session_id: newMessage.session_id })

        if (sessionIndex === -1) {

            state.session = state.session.concat(newMessage);

        } else {

            state.session[sessionIndex] = newMessage;

        }

        return {...state };
    }

    return state;

};

export default session;