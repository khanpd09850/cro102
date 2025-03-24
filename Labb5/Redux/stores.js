
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlides";
import dataReducer from "./createActionThunk";


export const store = configureStore({
    reducer: {
        todo: todosReducer,
        datas: dataReducer,

    },
});