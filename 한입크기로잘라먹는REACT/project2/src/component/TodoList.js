import './TodoList.css';
import TodoItem from './TodoItem';
import { useContext, useMemo, useState } from 'react';
import { TodoStateContext } from '../App';

// App.js 에서 TodoList 넘겨 받음
const TodoList = () => {
    const todo = useContext(TodoStateContext);

    // 검색창의 내용을 저장하는 state 생성
    const [search, setSearch] = useState("");

    // 검색창이 변할때마다 내용을 받아서 state 변수에 저장
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    // 검색창의 내용이 투두 리스트의 content에 포함되는 것만 필터링해서 getSearchResult에 저장
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    };

    const analyzeTodo = useMemo(() => {
        console.log("함수호출");
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todo]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className='TodoList'>
            <h4>Todo List 🌿</h4>
            <div>총개수 : {totalCount}</div>
            <div>완료된 할 일 : {doneCount}</div>
            <div>미완료 : {notDoneCount}</div>
            <input value={search} onChange={onChangeSearch} className='searchbar' placeholder='검색어를 입력하세요' />
            <div className='list_wrapper'>
                {/* 넘겨받은 투두리스트를 map을 통해 순회함. 
                Todolist 내용들을 TodoItem 으로 넘겨줌 */}
                {/* 필터링된  리스트를 순회하고 해당 리스트를 TodoItem 으로 넘겨줌 */}
                {getSearchResult().map((it) => (
                    // App.js 로 부터 받은 onUpdate 함수를 TodoItem 으로 넘겨줌
                    <TodoItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
};

TodoList.defaultProps = {
    todo: [],
};

export default TodoList;