import { ReactElement } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from "antd"
import { toggleConfirmTodoDeleteModal } from "modules/popup/popup.module"
import { isConfirmDeletePopupVisible, selectDeleteTodoId } from "modules/popup/popup.selectors"
import { deleteTodo } from "modules/todo/todo.module"

export const DeleteTodoPupup = (): ReactElement => {
    const showConfirm = useSelector(isConfirmDeletePopupVisible);
    const id = useSelector(selectDeleteTodoId);
    const dispatch = useDispatch();

    const onOk = () => {
        dispatch(deleteTodo(id))
        dispatch(toggleConfirmTodoDeleteModal(''));
    }
    const onCancel = () => {
        dispatch(toggleConfirmTodoDeleteModal(''));
    }

    return <Modal title="Вы уверены что хотите удалить" visible={showConfirm} onOk={onOk} onCancel={onCancel} okText="Удалить" cancelText="Отменить" />
}
