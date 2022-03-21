import { useSelector } from "react-redux";
import { selectRootTodosId } from "modules/todo/todo.selectors";
import { DeleteTodoPupup } from "ui/todo";
import { TodoItem } from "ui/todo";

export const TodoList = () => {
  const rootItems = useSelector(selectRootTodosId);
  return <div>
    <DeleteTodoPupup />
    {rootItems.map(id => <TodoItem key={id} id={id} />)}</div>
}