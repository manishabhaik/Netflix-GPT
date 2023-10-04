import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers:{
    addUser:(state,action)=>{
        //  console.log("add User");
        return action.payload;
    },
    removeuser:()=>{
        //  console.log('remove user');
        return null
    }
  }

});
export const {addUser,removeuser} = userSlice.actions;
export default userSlice.reducer;
