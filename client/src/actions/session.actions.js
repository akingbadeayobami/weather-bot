const { sessionConstants } = require("../constants");
const chatServices = require("../services/chat.services");

const getSession = () => {

    return dispatch => {
        chatServices.getSession().then(response => {
            dispatch({
                type: sessionConstants.GET_HISTORY,
                payload: response.data
            });
        });
    };

};

export {
    getSession
}