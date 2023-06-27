import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useState, useRef } from 'react';

function App() {
  // 저장받은 리스트의 아이디가 중복되지 않기 위한 ID Ref
  const idRef = useRef(0);
  // // 모조 데이터 ( 목 데이터 )
  // const mockTodo = [
  //   {
  //     id: 0,
  //     isDone: false,
  //     content: "React 공부하기",
  //     createDate: new Date().getTime(),
  //   },
  //   {
  //     id: 1,
  //     isDone: false,
  //     content: "빨래 널기",
  //     createDate: new Date().getTime(),
  //   },
  //   {
  //     id: 2,
  //     isDone: false,
  //     content: "설거지하기",
  //     createDate: new Date().getTime(),
  //   },
  // ];
  // 입력받은 투두  리스트를 저장할 state 변수
  const [todo, setTodo] = useState([]);
  // TodoEditor 에 전달할 새로운 리스트 생성 함수
  const onCreate = (content) => {
    // 투두리스트의 데이터 형태 지정
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  // 체크박스를 누를때 체크 상태를 변경하기 위한 onUpdate 
  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) =>
          // 리스트를 순회하며 체크한 아이템의 ID 와 해당 아이템의 ID 가 일치할 경우 isDone을 반대로 변경
          it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };
  const onDelete = (targetId) => {
    // 삭제 버튼을 누른 아이템의 id 를 받아와서 투두리스트에서 같은 ID 를 가진 항목을 제외하고 다시 투두리스트 생성
    setTodo(todo.filter((it) => it.id !== targetId));
  }
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      {/* 입력받고 저장한 투두리스트를 TodoList.js 파일로 넘겨줌 */}
      {/* onUpdate 를 통해 변경된 isDone 을 반영한 투두리스트를 다시 넘겨줌 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default App;
