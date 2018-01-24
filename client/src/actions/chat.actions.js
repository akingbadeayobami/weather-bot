const { chatConstants, messageByConstants } = require("../constants");
const chatServices = require("../services/chat.services");
const { randomId } = require("../utils");


/**
 * @function getSessionMessages
 * @description Action for when getting a session's messages
 * @param {number} session_id - Session ID
 */
const getSessionMessages = (session_id) => {

    return dispatch => {
        // dispatch to set the new session id
        dispatch({
            type: chatConstants.SET_CHAT_SESSION_ID,
            payload: {
                session_id: session_id
            }
        });

        chatServices.getSessionMessages(session_id).then(response => {
            // dispatch to set the messages for the session
            dispatch({
                type: chatConstants.GET_CHAT_MESSAGES,
                payload: response.data
            });
        });
    };

};

/**
 * @function getNewSession
 * @description Action for when creating a new session
 */
const getNewSession = () => {

    return dispatch => {
        chatServices.getNewSession().then(response => {
            // dispatch to set the new sessionID
            dispatch({
                type: chatConstants.NEW_CHAT_SESSION,
                payload: {...response.data, _id: randomId() }
            });

        });
    };

}

/**
 * @function postMessage
 * @description Action for when sending a message to the bot
 * @param {string} message - User's Message
 * @param {number} session_id - Session ID
 */
const postMessage = (message, session_id) => {

    return dispatch => {

        // dispatch to append the user's message to the chat
        dispatch({
            type: chatConstants.POST_USER_MESSAGE,
            payload: {
                _id: randomId(),
                message: message,
                session_id: session_id,
                message_by: messageByConstants.USER,
                created_at: new Date()
            }
        });

        chatServices.postMessage(message, session_id).then(response => {
            // dispatch to append the bot's reply to the chat
            dispatch({
                type: chatConstants.POST_BOT_MESSAGE,
                payload: {
                    _id: randomId(),
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
    getSessionMessages,
    postMessage,
    getNewSession
}