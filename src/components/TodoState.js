import React, {useReducer, createContext, useRef, useContext} from 'react';

const initialTodo = [
    {id:1, text: '고양이 보기', done: true},
    {id:2, text: '고양이 밥주기', done: true},
    {id:3, text: '고양이 영상 보기', done: true},
    {id:4, text: '고양이 놀아주기', done: true},
    {id:5, text: '공부하기', done: false},
];

// state, action을 파라미터로 받아와서 새로운 상태를 반환하는 함수
// state는 현재 가리키고 있는 상태를 의미하고, action은 업데이트를 위해 참조할 값을 의미합니다.
// action.type에 따라 다른 작업을 하고, 새로운 상태를 만들어서 반환합니다.
function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            // concat을 사용하여 배열에 새 항목을 추가합니다. 
            return state.concat(action.todo);
        case 'TOGGLE':
            // map()을 사용하여 배열의 각 요소를 변환합니다.
            // ...todo는 기존의 todo 객체를 복사한 뒤에 done 값을 덮어씌웁니다.
            // !todo.done은 현재 done 값의 반대값을 의미합니다. (완료되지 않은 상태)
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateCon = createContext();
const TodoDispatch = createContext();
const TodoNextId = createContext();

export function TodoProvider({children}) {
    // 목록의 상태를 관리하는 useReducer를 사용합니다.
    // 첫번째 파라미터에는 reducer 함수를 넣고, 두번째 파라미터에는 해당 reducer의 기본값을 넣습니다.
    const [state, dispatch] = useReducer(todoReducer, initialTodo);
    // useRef를 사용하여 id를 관리합니다.
    // 특정 DOM을 선택해야 할 때 사용하는 useRef와는 다르게, 일반 값을 관리할 때 사용합니다.
    // 
    const nextId = useRef(6);

    return (
        // Provider 컴포넌트를 사용하여 Context의 값을 설정합니다.
        // Context의 값을 설정할 때는 value라는 props를 사용합니다.
        // value를 설정할 때는 객체 형태로 설정해야 합니다.
        <TodoStateCon.Provider value={state}>
            <TodoDispatch.Provider value={dispatch}>
                <TodoNextId.Provider value={nextId}>
                    {children}
                </TodoNextId.Provider>
            </TodoDispatch.Provider>
        </TodoStateCon.Provider>
    );
}

export function useTodoState(state) {
    const context = useContext(TodoStateCon);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatch);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextId);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
