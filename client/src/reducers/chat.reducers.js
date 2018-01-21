const initial = {
    chat: []
};

const chat = (state = initial, action) => {

    if (action.type === 'GET_CHAT') {
        return {...state, chat: action.payload };
    }

    return state;

};

export default chat;