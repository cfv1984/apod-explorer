import {all, fork}        from "redux-saga/effects";
import providePictures    from "./providePictures";
import currentDateUpdated from "./currentDateUpdated";

export default function* rootSaga() {
    yield all([
        fork(providePictures),
        fork(currentDateUpdated)
    ]);
}
