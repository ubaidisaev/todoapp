import { ReactElement } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Typography, Button } from 'antd';
import { toggleConfirmTodoDeleteModal } from 'modules/popup/popup.module';
import { toggleComplete } from 'modules/todo/todo.module';
import { selectTodoById } from "modules/todo/todo.selectors";
import { RootState } from "store";

const { Text } = Typography;


export const TodoItem = ({ id, level = 1 }: { id: string, level?: number }): ReactElement => {
  const todo = useSelector((state: RootState) => selectTodoById(state, id));
  const dispatch = useDispatch();


  const handleCompleteToggle = () => dispatch(toggleComplete(id));
  const handleDelete = () => {
    dispatch(toggleConfirmTodoDeleteModal(id));
  }


  return (<div key={todo.id} >
    <Checkbox onChange={handleCompleteToggle} checked={todo.completed}><Text className='todotitle' delete={todo.completed}>{todo.title}</Text></Checkbox>{todo.completed && <Button onClick={handleDelete} type="text" danger>Удалить</Button>}
    <div className='children' style={{ marginLeft: `${level * 30}px` }}>
      {
        todo.child.map((id: any) => {
          return <TodoItem key={id} id={id} level={level + 1} />
        })
      }
    </div>
  </div>)
}