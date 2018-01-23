import axios from "./axios";

function getSession() {

    return axios.get('chat/session');

}

function getChatMessages(session_id) {

    return axios.get('chat/messages/' + session_id);

}

function getNewSession() {

    return axios.get('chat/session/new');

}


function getLastChatMessages() {

    return axios.get('chat/messages/last');

}


function postMessage(message, session_id) {

    return axios.post('chat/', {
        session_id: session_id,
        message: message,
    });

}

export {
    getSession,
    getChatMessages,
    postMessage,
    getLastChatMessages,
    getNewSession
};