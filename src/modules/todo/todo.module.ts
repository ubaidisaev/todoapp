import {  createAction, createReducer } from '@reduxjs/toolkit';
import uniqueId from 'lodash.uniqueid';
import { IAddTodoAction, ITodosState } from 'modules/todo/todo.types';


export const addTodo = createAction<IAddTodoAction>('/todo/create');
export const deleteTodo = createAction<string>('/todo/delete');
export const toggleComplete = createAction<string>('/todo/completed');

const firstItemId = uniqueId();
const secondItemId = uniqueId();

const initialState: ITodosState = {
    1: {
        id: firstItemId,
        title: 'Первый элемент списка',
        parent_id: null,
        child: [secondItemId],
        completed: false
    },
    2: {
        id: secondItemId,
        title: 'Подуровень элемента 1',
        parent_id: firstItemId,
        child: [],
        completed: true
    },
}


export const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            const { parent_id = null, title } = action.payload;
            const id = uniqueId();
            state[id] = { id, title, parent_id, completed: false, child: [] };
            if (parent_id) state[parent_id] = { ...state[parent_id], child: state[parent_id].child.concat(id) };
        })
        .addCase(toggleComplete, (state, action) => {
            const id = action.payload;
            return {
                ...state, [id]: {
                    ...state[id],
                    completed: !state[id].completed
                }
            }
        })
        .addCase(deleteTodo, (state, action) => {
            const id = action.payload;
            const currentTodo = state[action.payload];
            currentTodo.child.forEach(id => state[id].parent_id = null);
            if(currentTodo.parent_id) state[currentTodo.parent_id].child = state[currentTodo.parent_id].child.filter(idParent => id !== idParent);
            delete state[action.payload];
        })
});