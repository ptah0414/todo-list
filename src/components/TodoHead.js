import React from 'react';
import styled from 'styled-components';
import {useTodoState} from './TodoState';

const HeadStyle = styled.div`
    border-bottom: 1px solid #e9ecef;
    padding: 48px 32px 24px 32px;
    text-align: center;

    h1 {
        text-align: center;
        margin: 0;
        font-size: 36px;
        color: #343a40;
        padding-top: 20px;
    }

    h2 {
        margin: 0;
        font-size: 21px;
        color: #868e96;
        margin-top: 4px;
    }

    p {
        margin: 0;
        font-size: 16px;
        color: #868e96;
        margin-top: 4px;
    }
`;

function TodoHead() {
    const state = useTodoState();
    const undone = state.filter(todo => !todo.done)
    
    console.log(state);

    // 현재 날짜를 구함
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    });

    return (
        <HeadStyle>
            <h1>📝 Todo List 😻</h1>
            <h2>{dateString} {dayName}</h2>
            <p>작성자: 이건우</p>
            <p>오늘 할 일 {undone.length}개 남음</p>

        </HeadStyle>
    );
}

export default TodoHead;