import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef, useReducer, useCallback, useMemo } from 'react';
import React from 'react';
// import TestComp from './component/TestComp';

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
            ...it,
            isDone: !it.isDone,
          }
          : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {

  // 모조 데이터 ( 목 데이터 )
  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "빨래 널기",
      createDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "설거지하기",
      createDate: new Date().getTime(),
    },
  ];

  // // 입력받은 투두  리스트를 저장할 state 변수
  // const [todo, setTodo] = useState([]);

  const [todo, dispatch] = useReducer(reducer, mockTodo);

  // 저장받은 리스트의 아이디가 중복되지 않기 위한 ID Ref
  const idRef = useRef(3);


  // TodoEditor 에 전달할 새로운 리스트 생성 함수
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  // 체크박스를 누를때 체크 상태를 변경하기 위한 onUpdate 
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          {/* 입력받고 저장한 투두리스트를 TodoList.js 파일로 넘겨줌 */}
          {/* onUpdate 를 통해 변경된 isDone 을 반영한 투두리스트를 다시 넘겨줌 */}
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
};


export default App;

