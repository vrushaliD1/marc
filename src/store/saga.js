import { call, put, takeLatest } from 'redux-saga/effects';
import { getUser } from '../api';
import {LOAD_USER} from './constants'
import {setUser} from './reducer'

function* fetchUser(action) {
    try{
        // yield put(setIsLoading(true))
        const response = yield call(getUser,action.payload);
        yield put(setUser(response.data.rows));
        // yield put(setIsLoading(false))
    }catch(err){
      console.log(err);
    }
}


function* watchFetchChapter() {
  yield takeLatest(LOAD_USER, fetchUser);
}

export default watchFetchChapter;