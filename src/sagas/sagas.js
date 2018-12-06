import {call, takeLatest} from "../../node_modules/redux-saga/effects";

export default function* watcher() {
    yield takeLatest('FETCH', (type) => workerSaga(type));
}

const retrieveFromServer = (type) => {
    console.log(type);
    /*console.log('Retrieving from Server...');*/
}

function* workerSaga(type) {
    yield call(retrieveFromServer(type));
}