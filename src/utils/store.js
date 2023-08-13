import { configureStore } from "@reduxjs/toolkit";
import sidePanelSlice from "./sidePanelSlice";
import composeMsgSlice from "./composeMsgSlice";

const store=configureStore({
    reducer:{
        sidePanel:sidePanelSlice,
    composeMsg:composeMsgSlice,
        
    }
})

export default store;