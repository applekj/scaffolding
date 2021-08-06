import { call, put, takeEvery, take } from 'redux-saga/effects'
import * as services from '../services/home'

function* getData({ payload }) {
    const result = yield call(services.getData, payload)
    yield put({
        type: 'success',
        payload: {
            getData: result
        }
    })
}


function* homeSaga() {
    yield takeEvery('getData', getData)
}

export default homeSaga