import { Item } from "semantic-ui-react";

const { createSlice } = require("@reduxjs/toolkit");

const reducer = createSlice({
  name: "options",
  initialState: { result: "" },
  reducers: {
    setOptions: (state, action) => {
      const original = {...action.payload}
      const options =[]
      for ( let i of action.payload){
        const item ={}
        item.value = i.value
        item.label = i.label
        options.push(item)
      }
      return options;
    },
    setResponse: (state, action) => {
      state.result = action.payload;
    },
  },
});
export const { setOptions, setResponse } = reducer.actions;
export default reducer.reducer;
