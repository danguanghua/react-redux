import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import TodoList from './TodoList'

//provider包裹要使用的组件
import { Provider } from 'react-redux';
import store from './store';

const app = (
  <Provider store = {store}>
    <TodoList/>
  </Provider>
) 


const container = document.getElementById('root');
const root = createRoot(container);
root.render(app); 
// ReactDOM.render(
//   <React.StrictMode>
//     <TodoList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

