const { createSlice, current } = require("@reduxjs/toolkit");

const reducer = createSlice({
    name:"chapter",
    initialState:{},
    reducers:{
        setChapter:(state,action)=>{
            return {...action.payload}
        },
        saveUserResponse:(state,action)=>{
            const {questionId,value} = action.payload;
            let questions = state.questions;
            questions.forEach((question)=>{
                if(question.question._id===questionId){
                    question.userResponse = value;
                }
            })
        },
        
    }
})
export const {setChapter,saveUserResponse} = reducer.actions;

export default reducer.reducer;