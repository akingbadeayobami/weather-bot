const { historyConstants, chatConstants } = require("../constants");
const _ = require('lodash');

const initial = {
    history: []
};

const history = (state = initial, action) => {

    if (action.type === historyConstants.GET_HISTORY) {
        return {...state, history: action.payload };
    }

    if (action.type === chatConstants.POST_BOT_MESSAGE || action.type === chatConstants.POST_USER_MESSAGE) {

        const newMessage = action.payload;

        const historyIndex = _.findIndex(state.history, { history_id: newMessage.history_id })

        if (historyIndex === -1) {

            state.history = state.history.concat(newMessage);

        } else {

            state.history[historyIndex] = newMessage;

        }

        return {...state };
    }

    return state;

};

export default history;