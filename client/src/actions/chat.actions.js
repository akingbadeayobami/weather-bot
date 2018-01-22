const { chatConstants } = require("../constants/chat.contants");
const chatServices = require("../services/chat.services");

const getChatMessages = (history_id) => {

    return dispatch => {
        chatServices.getChatMessages(history_id).then(response => {
            dispatch({
                type: chatConstants.GET_CHAT_MESSAGES,
                payload: response.data
            });
        });
    };

};

const postMessage = (message, history_id) => {

    return dispatch => {
        chatServices.postMessage(message, history_id).then(response => {
            dispatch({
                type: chatConstants.POST_BOT_MESSAGE,
                payload: response.data
            });
        });
    };

};

const addUserMessage = (message, history_id) => {

    return dispatch => {
        dispatch({
            type: chatConstants.addUserMessage,
            payload: {
                message: message,
                history_id: history_id,
            }
        });

    };

};

export {
    getChatMessages,
    postMessage,
    addUserMessage
}