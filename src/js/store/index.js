import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware           from "redux-saga";
import rootReducer                    from "./reducers";
import rootSaga                       from "./sagas";


const sagas            = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagas))
);

sagas.run(rootSaga);

export default store;
