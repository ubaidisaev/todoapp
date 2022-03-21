import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "modules/todo/todo.module";
import {popupReducer} from "modules/popup/popup.module";


export default combineReducers({
    todos: todoReducer,
    popup: popupReducer
})