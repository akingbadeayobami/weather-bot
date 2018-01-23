const { sessionConstants } = require("../constants");
const chatServices = require("../services/chat.services");

const getAllSession = () => {

    return dispatch => {
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