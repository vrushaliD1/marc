import { call, put, takeLatest } from 'redux-saga/effects';
import {LOAD_CHAPTERS} from './constants'
import {setChapters} from './reducer'
import {fetchChapters} from '../../api/index'
import {  setIsLoading } from '../reducer';
function* FetchChapter(action) {
    try{
      yield put(setIsLoading(true));
      const response = yield call(fetchChapters,action.payload);
      yield put(setChapters(response.data.rows));
      yield put(setIsLoading(false));
    }catch(err){
      console.log(err);
    }
}


function* watchFetchChapter() {
  yield takeLatest(LOAD_CHAPTERS, FetchChapter);
}

export default watchFetchChapter;