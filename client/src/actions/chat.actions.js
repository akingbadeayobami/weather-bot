const { chatConstants, messageByConstants } = require("../constants");
const chatServices = require("../services/chat.services");
const { random_id } = require("../utils");

const getChatMessages = (session_id) => {

    return dispatch => {
        chatServices.getChatMessages(session_id).then(response => {
            dispatch({
                type: chatConstants.GET_CHAT_MESSAGES,
                payload: response.data
            });
        });
    };

};

const getLastChatMessages = () => {

    return dispatch => {
        chatServices.getLastChatMessages().then(response => {
            dispatch({
                type: chatConstants.GET_CHAT_MESSAGES,
                payload: response.data
            });
        });
    };

};

const getNewSession = () => {

    return dispatch => {
        chatServices.getNewSession().then(response => {
            dispatch({
                type: chatConstants.NEW_CHAT_SESSION,
                payload: response.data
            });
        });
    };

}

const postMessage = (message, session_id) => {

    return dispatch => {

        dispatch({
            type: chatConstants.POST_USER_MESSAGE,
            payload: {
                _id: random_id(),
                message: message,
                session_id: session_id,
                message_by: messageByConstants.USER,
                created_at: new Date()
            }
        });

        chatServices.postMessage(message, session_id).then(response => {
            dispatch({
                type: chatConstants.POST_BOT_MESSAGE,
                payload: {
                    _id: random_id(),
                    message: response.data.message,
                    session_id: session_id,
                    message_by: messageByConstants.BOT,
                    created_at: new Date()
                }
            });
        });
    };

};

export {
    getChatMessages,
    postMessage,
    getLastChatMessages,
    getNewSession
}