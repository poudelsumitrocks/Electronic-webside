import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Slice/Userslice";

export const store =configureStore({
        reducer:{
        user: userReducer,
    }
});

