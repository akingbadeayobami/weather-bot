const { sessionConstants } = require("../constants");
const chatServices = require("../services/chat.services");

/**
 * @function getAllSession
 * @description Action for when getting all the sessions
 */
const getAllSession = () => {

    return dispatch => {
        // dispatch to set all the sessions
        chatServices.getAllSession().then(response => {
            dispatch({
                type: sessionConstants.GET_ALL_SESSION,
                payload: response.data
            });
        });
    };

};

export {
    getAllSession
}