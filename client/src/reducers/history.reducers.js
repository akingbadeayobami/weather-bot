const historyConstants = require("../constants/history.constants");

const initial = {
    history: []
};

const history = (state = initial, action) => {

    if (action.type === historyConstants.GET_HISTORY) {
        return {...state, history: action.payload };
    }

    return state;

};

export default history;