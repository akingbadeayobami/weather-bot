const { chatConstants } = require("../constants/chat.contants");
const { messageByConstants } = require("../constants/messageby.constants");
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



const postMessage = (message, history_id) => {

    return dispatch => {

        dispatch({
            type: chatConstants.POST_MESSAGE,
            payload: {
                message: message,
                history_id: history_id,
                message_by: messageByConstants.USER,
            }
        });

        chatServices.postMessage(message, history_id).then(response => {
            dispatch({
                type: chatConstants.POST_MESSAGE,
                payload: {
                    message: response.data.message,
                    history_id: history_id,
                    message_by: messageByConstants.BOT,
                }
            });
        });
    };

};

export {
    getChatMessages,
    postMessage,
    getLastChatMessages
}