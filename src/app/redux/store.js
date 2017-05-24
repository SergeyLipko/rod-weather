import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './modules/rootReducer';

const handleMiddlewares = _logger => (...middleware) => {
    let middlewares = [...middleware];

    if (_logger && process.env.NODE_ENV === `development`) {
        middlewares.push(logger);
    }
    return middlewares;
};

const store = createStore(
    rootReducer,
    applyMiddleware(...handleMiddlewares()(thunk))
);

export default store;
