import {put, takeLatest}                        from "redux-saga/effects";
import {findPicture, reportError, storePicture} from '../actions';
import api                                      from '../../api';

function* getPictures({payload: {year, month, day}}) {
    try {
        const result = yield api.pictures.find(year, month, day);
        yield put(storePicture(result));
    }
    catch (e) {
        yield put(reportError("There was an error"));
    }
}

export default function* providePictures() {
    yield takeLatest(findPicture, getPictures);
}