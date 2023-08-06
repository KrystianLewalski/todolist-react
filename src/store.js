import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import taskReducer from "./features/tasks/taskSlice";
import rootSaga from "./features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;