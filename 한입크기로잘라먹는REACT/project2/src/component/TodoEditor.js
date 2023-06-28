import { useContext, useRef, useState } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css"

const TodoEditor = () => {
    const { onCreate } = useContext(TodoDispatchContext);
    // 입력받을 내용의 state
    const [content, setContent] = useState("");

    // 입력창의 내용이 변할때마다 content state 에 입력창의 내용을 저장
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // 입력창이 비었는지 확인하기 위한 Ref
    const inputRef = useRef();

    // 추가 버튼 눌렀을 때 투두 리스트 입력
    const onSubmit = () => {
        // 입력창이 비었을땐 실행 안함
        if (!content) {
            inputRef.current.focus();
            return;
        } else {
            // 리스트 입력 이후 입력창 비움
            onCreate(content);
            setContent("");
        };
    }

    // 엔터키 눌렀을 때 투두 리스트 입력됨
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;