const { createSlice } = require("@reduxjs/toolkit");

const reducer = createSlice({
    name:"chapters",
    initialState:[],
    reducers:{
        setChapters:(state,action)=>{
            return [...action.payload];
        }
    }
})
export const {setChapters}  = reducer.actions;
export default reducer.reducer;