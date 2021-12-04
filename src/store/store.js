import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import  mainSaga from './saga' ;
import chapterSaga from './chapter/saga';
import chaptersSaga from './chapters/saga'
import mainReducer from './reducer';
import chaptersReducer from './chapters/reducer';
import chapterReducer from './chapter/reducer';
import answerReducer from './answers/reducer';
import optionReducer from "./options/reducer"

const sagaMiddleware = createSagaMiddleware()

const store =  configureStore({
      reducer: {
            global:mainReducer,
            chapters:chaptersReducer,
            chapter:chapterReducer,
            answers:answerReducer,
            options: optionReducer,
      },
      middleware:[sagaMiddleware],
})

sagaMiddleware.run(mainSaga);
sagaMiddleware.run(chapterSaga);
sagaMiddleware.run(chaptersSaga);
// sagaMiddleware.run(watchFetchChapterQuestions);
// sagaMiddleware.run(watchSubmitAnswer);

export default store;