import { createSlice } from "@reduxjs/toolkit";

const sidePanelSlice=createSlice({
    name:'sidePanelSlice',
    initialState:{
        isOpen:true
    },
    reducers:
        {
            changeOpenState:(state)=>{
                (state.isOpen)?state.isOpen=false:state.isOpen=true;

            }
        }
    
})

export const {changeOpenState} = sidePanelSlice.actions;
export default sidePanelSlice.reducer;