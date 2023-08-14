import { createSlice } from "@reduxjs/toolkit";

const composeMsgSlice=createSlice({
    name:'composeMagSlice',
    initialState:{
        openCompose:false
    },
    reducers:
        {
            openComposeMsg:(state)=>{
               state.openCompose=true;
            },
            closeComposeMsg:(state)=>{
                state.openCompose=false
            }
        }
})

export const {openComposeMsg,closeComposeMsg} = composeMsgSlice.actions;
export default composeMsgSlice.reducer;