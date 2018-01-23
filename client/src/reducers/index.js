import { combineReducers } from 'redux';

import session from "./session.reducers";
import chat from "./chat.reducers";

const reducers = combineReducers({
    session,
    chat,
});

export default reducers;