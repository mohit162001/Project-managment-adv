import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";


const store = configureStore({
    reducer: projectSlice.reducer
})

export default store;