import { combineReducers } from 'redux';

import  history  from "./history.reducers";
import  chat  from "./chat.reducers";

const reducers = combineReducers({
    history,
    chat,
});

export default reducers;
