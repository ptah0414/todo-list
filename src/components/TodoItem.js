import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoState';

const Remove = styled.div`
    // opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
        opacity: 1;
    }
`;

const ItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    $:hover {
        ${Remove} { 
            display: initial;
        }
    }
    &:nth-child(even) {
        background: #f8f9fa;
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    // done props가 true일 때 특정 스타일을 부여해줍니다.
    ${props =>
        props.done && 
        `
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        `
            color: #ced4da;
        `}
`;

const TodoItem = ({ id, done, text }) => {
    const dispatch = useTodoDispatch();

    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });

    return (
        <ItemStyle>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </ItemStyle>
    );
};

export default TodoItem;