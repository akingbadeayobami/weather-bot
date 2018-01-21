import axios from "./axios";

const getHistory = () => {

    return dispatch => {
        axios.get('history/get').then(response => {
            dispatch({
                type: "GET_HISTORY",
                payload: response.data
            });
        });
    };

};

export {
    getHistory
}