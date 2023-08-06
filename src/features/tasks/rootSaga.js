import {all} from "redux-saga/effects"
import { taskSaga } from "./tasksSaga"

export default function* rootSaga() {
    yield all([
        taskSaga(),
    ]);
};