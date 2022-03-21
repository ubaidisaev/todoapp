import { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Select, Modal } from 'antd';
import { addTodo } from 'modules/todo/todo.module';
import { selectAllTodos } from 'modules/todo/todo.selectors';
import { toggleAddTodoPopup } from 'modules/popup/popup.module'
import { isAddTodoPopupVisible } from 'modules/popup/popup.selectors'

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 20, span: 5 },
};


export const AddTodoForm = (): ReactElement => {
    const dispatch = useDispatch();
    const showAddTodoForm = useSelector(isAddTodoPopupVisible);
    const todos = useSelector(selectAllTodos);
    const [form] = Form.useForm();

    const openPopup = useCallback(() => {
        dispatch(toggleAddTodoPopup());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const closePopup = useCallback(() => {
        dispatch(toggleAddTodoPopup());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addTodoClick = () => {
        dispatch(addTodo({ title: form.getFieldValue('title'), parent_id: form.getFieldValue('parent') }));
        form.resetFields();
        closePopup();
    }



    return (
        <>
            <Button onClick={openPopup}>Добавить элемент</Button>
            <Modal title="Добавить элемент" visible={showAddTodoForm} width={600} onCancel={closePopup} footer={null}>
                <Form {...layout} form={form} name="control-hooks" onFinish={addTodoClick}>
                    <Form.Item name="title" label="Заголовок" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="parent" label="Родительский элемент">
                        <Select
                            placeholder="Родительский элемент"
                            onChange={() => { }}
                            allowClear
                        >
                            {todos.map((todo) => <Option key={todo.id} value={todo.id}>{todo.title}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item  {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Добавить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}