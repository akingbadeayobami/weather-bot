const { chatConstants, messageByConstants } = require("../constants");
const chatServices = require("../services/chat.services");
const { random_id } = require("../utils");

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
            type: chatConstants.POST_USER_MESSAGE,
            payload: {
                _id: random_id(),
                message: message,
                history_id: history_id,
                message_by: messageByConstants.USER,
                created_at: new Date()
            }
        });

        // chatServices.postMessage(message, history_id).then(response => {
        //     dispatch({
        //         type: chatConstants.POST_BOT_MESSAGE,
        //         payload: {
        //             _id: random_id(),
        //             message: response.data.message,
        //             history_id: history_id,
        //             message_by: messageByConstants.BOT,
        //             created_at: new Date()
        //         }
        //     });
        // });
    };

};

export {
    getChatMessages,
    postMessage,
    getLastChatMessages
}