import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoState';

const CircleButton=styled.button`
    background:#0371AC;
    color:#fff;

    //마우스 오버했을 때
    &:hover {
        background:#BA08C5;
    }

    //마우스로 클릭해서 활성화될 때
    &:active {
        background:#07AB5C;
    }

    //앞쪽 순서로 지정
    z-index:10;

    cursor:pointer;
    width:80px;
    height:80px;

    //블록 요소로 변경함.
    display:block; 

    //position값이 absolute가 아닐 때 자식객체를 정가운데 정렬
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:50px;

    //다른 객체랑 겹침(position값이 absolute일 때 객체를 정가운데 정렬)
    position:absolute; 
    left:50%;
    bottom:0;
    transform:translate(-50%, -50%);

    //모서리를 동그랗게 만들어서 원이 됨.
    border-radius:100%;

    //테두리 없음.
    border:none;

    //클릭했을 때 점선 테두리가 생기는 것을 막아줌
    outline:none;

    //버튼에 마우스를 오버했을 때 버튼 회전되는 애니메이션
    transition:all 0.3s ease-in;

    ${props=>
        props.open && css`
            background:#ff0000;

            &:hover{
                background:blue;
            }
            &:active {
                background:yellow;
            }   
            transform:translate(-50%, 50%) rotate(45deg);
        `}    
    `;

    const InsertFormPositioner=styled.div`
        width:100%;
        position:absolute;
        bottom:0;
    `;

    const InsertForm=styled.form`
        padding:30px;
        padding-bottom:70px;

        //왼쪽 위 모서리부터 시작하여 시계방향
        //border-radius:0 16px 16px 0;

        border-top:1px solid #e9ecef;

        background:transparent;  //베경 투명
    `;

    const Input=styled.input`
            padding:15px;
            border-radius:6px;
            border:1px solid #dee2e6;
            width:100%;
            outline:none;
            font-size:16px;

            //객체에 padding값을 적용했을 때 width값이 영향을 받아서 객체의 실제 크기가 영향을 받는데 , 영향을 받지 않도록 크기가 늘어나는 기준을 테두리로 설정함.
            box-sizing:border-box;
    `;



function TodoCreate(){
    //리액트 Hook 기능
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch=useTodoDispatch();
    const NextId=useTodoNextId();

    const onToggle=()=>setOpen(!open);
    const onChange=e=>setValue(e.target.value);
    const onSubmit=e=>{
        e.preventDefault();
        dispatch({
            type:'CREATE',
            todo:{
                id:NextId.current,
                text:value,
                done:false
            }
        });
        setValue('');
        setOpen(false);
        NextId.current+=1;
    }

    return (
        <>
        { open && (
            //폼(form) 추가
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    <Input autoFocus placeholder="할 일을 입력 후 Enter키 하기" 
                    onChange={onChange} 
                    value={value} />

                </InsertForm>
            </InsertFormPositioner>
        )}

        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
        </>
    )
}
export default TodoCreate;