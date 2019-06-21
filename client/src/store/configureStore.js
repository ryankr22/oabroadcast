import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const enhancers = compose(
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
        window.devToolsExtension() ? window.devToolsExtension() : f => f        
    );

    return createStore(
        rootReducer, 
        initialState, 
        enhancers
    );
}