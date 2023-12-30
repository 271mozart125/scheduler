import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./reducer/firstslice";

const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    }
})

export default store