import axios from "./axios";

function getHistory() {

    return axios.get('chat/history');

}

function getChatMessages(history_id) {

    return axios.get('chat/messages/' + history_id);

}

function postMessage(message, history_id) {

    return axios.post('chat/', {
        history_id: history_id,
        message: message,
    });

}

export {
    getHistory,
    getChatMessages,
    postMessage,
};