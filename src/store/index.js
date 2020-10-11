import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './../reducers/index';
import thunk from 'redux-thunk';
import { getUser, getProduct } from '../actions/product';
import { getslider } from '../actions/slider';


export const store = createStore(
    reducers,
    applyMiddleware(thunk)
    // compose(
    //     applyMiddleware(thunk, loadingBarMiddleware()),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //         window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

store.dispatch(getProduct());
store.dispatch(getslider());