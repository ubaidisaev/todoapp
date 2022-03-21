import { createAction, createReducer } from '@reduxjs/toolkit';
import { IPopupState } from 'modules/popup/popup.types';


export const toggleAddTodoPopup = createAction('/popup/toggleAddTodo');
export const toggleConfirmTodoDeleteModal = createAction<string>('/popup/toggleConfirmTodoDelete');
export const selectTodoForRemove = createAction<string>('/popup/toggleConfirmTodoDelete');

const initialState: IPopupState = {
    addTodoFormModal: { show: false },
    confirmTodoDeleteModal: { show: false, id: '' }
}


export const popupReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleAddTodoPopup, (state, action) => {
            state.addTodoFormModal.show = !state.addTodoFormModal.show;
        })
        .addCase(toggleConfirmTodoDeleteModal, (state, action) => {
            state.confirmTodoDeleteModal.show = !state.confirmTodoDeleteModal.show;
            state.confirmTodoDeleteModal.id = action.payload;
        })
})