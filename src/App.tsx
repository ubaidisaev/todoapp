
import { Provider } from 'react-redux';
import {  Layout } from 'antd';
import { store } from 'store'
import { AddTodoForm } from 'ui/todo';
import { TodoList } from 'ui/todo';
import 'antd/dist/antd.css'


/*
  * TODO: 
    - Добавить свою сборку webpack
    - Ограничить уровень вложенности элементов
*/


const {  Content, Footer } = Layout;


function App() {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Content style={{ padding: '50px' }}>
          <TodoList />
          <br />
          <AddTodoForm />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Todo App ©2022</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
