import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchChaptersQuestion,submitAnswer, fetchOptions } from "../../api";
import { setIsLoading } from "../reducer";
import {LOAD_QUESTIONS, SAVE_ANSWERS} from './constants'
import { LOAD_OPTIONS } from "../options/constants";
import {setChapter} from './reducer'
import {setAnswers,setResponse} from '../answers/reducer'
import { setOptions } from "../options/reducer";
function* fecthQuestions(action){
    try{
        yield put(setIsLoading(true));
        const response = yield call(fetchChaptersQuestion,action.payload);
        yield put(setChapter(response.data.rows[0]))
        yield put(setIsLoading(false));
    }catch(err){
        console.log(err);
    }
}

function* SaveUserResponse(action){
    try{
        yield put(setIsLoading(true));
        const response = yield call(submitAnswer,action.payload);
        const data = response.data.message;
        yield put(setResponse(data));
        
    }catch(err){    
        console.log(err);
    }
}

function* fetchOption(){
        try{
        yield put(setIsLoading(true));
        const response = yield call(fetchOptions);
        const data = response.data.rows;
        yield put(setOptions(data));
        yield put(setIsLoading(false));
        
    }catch(err){    
        console.log(err);
    }

}



function* watchFetchQuestion(){
    yield takeLatest(LOAD_QUESTIONS,fecthQuestions);
    yield takeLatest(SAVE_ANSWERS,SaveUserResponse);
    yield takeLatest(LOAD_OPTIONS, fetchOption);
}


export default watchFetchQuestion;