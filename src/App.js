import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components';
import { Fragment } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import {TodoProvider} from './components/TodoState';

// 스타일 컴포넌트 선언
const GlobalStyle=createGlobalStyle`
  body {
    background:#282c34;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>      
    </TodoProvider>
  );
}

export default App;
