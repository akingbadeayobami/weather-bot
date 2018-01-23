import axios from "./axios";

/**
 * @function getAllSession 
 * @description Get all the sessions with their last messages 
 * @returns {Promise<Object[]>} A promise of array of object containing the sessions and their last messages      
 */
function getAllSession() {

    return axios.get('chat/session/all');

}

/**
 * @function getSessionMessages 
 * @description Get all the messages for a session 
 * @param {number} session_id - Session ID
 * @returns {Promise<Object[]>} A promise of array of object containing the session messages      
 */
function getSessionMessages(session_id) {

    return axios.get('chat/session/' + session_id);

}

/**
 * @function getNewSession 
 * @description Get new session ID
 * @returns {Promise<Object>} A promise of object containing the new session ID      
 */
function getNewSession() {

    return axios.get('chat/session/new');

}

/**
 * @function postMessage 
 * @description Sends User Message To Bot  
 * @param {string} message - User's Message
 * @param {number} session_id - Current Session ID
 * @returns {Promise<Object>} A promise of object containing the bot's reply      
 */
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