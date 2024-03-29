import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from './reducers';

const logMiddleware = (state) => (next) => (action) => {
    console.log(action.type, state.getState());
    return next(action);
}

const stringMiddleware = () => (dispatch) => (action) => {

    if (typeof action === 'string') {
        return dispatch({
            type: action
        });
    }

    return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

export default store;