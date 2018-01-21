const initial = {
    history: []
};

const history = (state = initial, action) => {

    if (action.type === 'GET_HISTORY') {
        return {...state, history: action.payload };
    }

    return state;

};

export default history;