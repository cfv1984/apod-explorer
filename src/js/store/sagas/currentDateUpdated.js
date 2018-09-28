import {put, takeLatest}             from "redux-saga/effects";
import {findPicture, setCurrentDate, clearErrors} from '../actions';
function* updateDate({payload: {year, month, day}}) {
    yield put(clearErrors());
    yield put(findPicture(year, month, day));
}

export default function* providePictures() {
    yield takeLatest(setCurrentDate, updateDate);
}