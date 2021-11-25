import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchChaptersQuestion,submitAnswer } from "../../api";
import { setIsLoading } from "../reducer";
import {LOAD_QUESTIONS, SAVE_ANSWERS} from './constants'
import {setChapter} from './reducer'
import {setAnswers,setResponse} from '../answers/reducer'
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



function* watchFetchQuestion(){
    yield takeLatest(LOAD_QUESTIONS,fecthQuestions);
    yield takeLatest(SAVE_ANSWERS,SaveUserResponse);
}


export default watchFetchQuestion;