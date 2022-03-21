import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";


const getPopup = (state: RootState) => state.popup;

export const isAddTodoPopupVisible = createSelector(getPopup, state => state.addTodoFormModal.show);
export const isConfirmDeletePopupVisible = createSelector(getPopup, state => state.confirmTodoDeleteModal.show);
export const selectDeleteTodoId = createSelector(getPopup, state => state.confirmTodoDeleteModal.id);


