import './TodoItem.css';

// TodoList 로 부터 투두리스트와 onUpdate 함수 전달받음
const TodoItem = ({ id, content, isDone, createDate, onUpdate, onDelete }) => {
    // checkBox 의 상태가 변할때 발생시킬 함수
    const onChangeCheckbox = () => {
        // checkBox 의 상태가 변한 아이템의 id 를 가져와 onUpdate 함수 실행
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id)
    };
    return (
        // 각각 필요한 위치에 전달받은 투두리스트 항목들을 삽입함.
        <div className='TodoItem'>
            <div className='checkbox_col'>
                {/* checkBox의 상태가 변할때 onChangeCheckbox 함수 실행 */}
                <input checked={isDone} onChange={onChangeCheckbox} type="checkbox" />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
};

export default TodoItem;