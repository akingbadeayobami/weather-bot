import axios from "./axios";

const getChat = () => {

    return dispatch => {
        axios.get('chat/get').then(response => {
            dispatch({
                type: "GET_CHAT",
                payload: response.data
            });
        });
    };

};

export {
    getChat
}