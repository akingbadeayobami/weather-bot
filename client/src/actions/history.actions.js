const historyConstants = require("../constants/history.constants");
const chatServices = require("../services/chat.services");

const getHistory = () => {

    return dispatch => {
        chatServices.getHistory().then(response => {
            dispatch({
                type: historyConstants.GET_HISTORY,
                payload: response.data
            });
        });
    };

};

export {
    getHistory
}