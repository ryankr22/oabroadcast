import {combineReducers} from 'redux';
import session from './sessionReducer';
import * as types from '../actions/actionTypes';

const appReducer = combineReducers({
    session
});

const rootReducer = (state, action) => {
    if (action.type === types.RESET_APP) {
        state = {...state, session: null }
    }

    return appReducer(state, action);
}

export default rootReducer;