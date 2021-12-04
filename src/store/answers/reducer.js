const { createSlice, current } = require("@reduxjs/toolkit");

const reducer = createSlice({
    name:"answers",
    initialState:{result:''},
    reducers:{
        setAnswers:(state,action)=>{
            return [...action.payload]
        },
        setResponse:(state,action)=>{
            state.result = action.payload;
        },
        
    }
})
export const {setAnswers,setResponse} = reducer.actions;
export default reducer.reducer;