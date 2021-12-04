const { createSlice } = require("@reduxjs/toolkit");

const reducer = createSlice({
    name:"global",
    initialState:{isloading:false,user:{}},
    reducers:{
        setIsLoading:(state,action)=>{
            return {
                ...state,isloading:action.payload
            };
        },
        setUser:(state,action)=>{
            return {...state, user: action.payload}
        },
    }
})
export const {setIsLoading,setUser} = reducer.actions;
export default reducer.reducer;