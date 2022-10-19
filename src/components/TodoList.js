import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoState';

const ListStyle = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();

    return (
        <ListStyle>
            {todos.map(todo => {
                return <TodoItem key = {todo.id}
                id = {todo.id}
                text = {todo.text}
                done = {todo.done}
                />
            })}
        </ListStyle>
    );
}

export default TodoList;
