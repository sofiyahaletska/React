import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from './root';
import ReduxThunk from 'redux-thunk';

const initialState = { comments: [] };

export default function configStore() {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(ReduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}