import axios from "./axios";

function getAllSession() {

    return axios.get('chat/session/all');

}

function getSessionMessages(session_id) {

    return axios.get('chat/session/' + session_id);

}

function getNewSession() {

    return axios.get('chat/session/new');

}

function postMessage(message, session_id) {

    return axios.post('chat/', {
        session_id: session_id,
        message: message,
    });

}

export {
    getAllSession,
    getSessionMessages,
    postMessage,
    getNewSession
};