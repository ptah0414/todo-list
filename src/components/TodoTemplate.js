import React from 'react';
import styled from 'styled-components';

const StyleBlock=styled.div`
    width:450px;
    height:700px;

    // relative, absolute, static(기본값), fixed(고정위치)
    // 부모객체는 relative, 자식객체는 absolute(객체끼리 겹칠때)
    position:relative;

    background:white;
    border-radius:20px;     //모서리 둥글게
    box-shadow:0 0 8px 0 rgba(0,0,0,0.4);    //검정색 투명도 40%

    margin:0 auto;      //작성중인 앱을 브라우저의 가운데로 배치

    margin-top:20px;
    margin-bottom:30px;
    display:flex;      //div의 자식객체를 행이나 열 기준으로 정렬
    flex-direction:column;    //열기준으로 정렬, (행기준:row)
`;

// 컴포넌트 태그  사이의 값에 접근하고자 할때 props.children을 사용한다.
function TodoTemplate({children}){
    return <StyleBlock>{children}</StyleBlock>
}
export default TodoTemplate;