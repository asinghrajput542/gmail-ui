import { createSlice } from "@reduxjs/toolkit";

const composeMsgSlice=createSlice({
    name:'composeMagSlice',
    initialState:{
        openCompose:false
    },
    reducers:
        {
            changeComposeMsgState:(state)=>{
                (state.openCompose)?state.openCompose=false:state.openCompose=true;
            }
        }
})

export const {changeComposeMsgState} = composeMsgSlice.actions;
export default composeMsgSlice.reducer;