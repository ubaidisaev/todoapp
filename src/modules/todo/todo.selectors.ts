import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const getTodos = (state: RootState) => state.todos;

export const selectTodoById = createSelector(getTodos, (state: RootState, id: string) => id, (todos, id) => todos[id]);

export const selectRootTodosId = createSelector(getTodos, (state) => Object.values(state).filter(todo => todo.parent_id === null).map(todo => todo.id));

export const selectAllTodos = createSelector(getTodos, (state) => Object.values(state));
