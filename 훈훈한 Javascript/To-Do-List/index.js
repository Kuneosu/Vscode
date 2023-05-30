// html 파일에서 필요한 정보들을 파싱해옴.
let todoInput = document.getElementById('todo__input');
const todoList = document.getElementById('todo__list');

// 로컬 스토리지에 저장되어있는 문자열을 객체 형태로 변환하여 savedTodoList에 저장
const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));

// TodoList 생성 함수 로컬 스토리지에 저장되어 있던 값을 파라미터로 입력 받을 수 있음
const createTodo = (storageData) => {
    // 사용자가 입력한 값을 불러와 todoContents에 저장
    let todoContents = todoInput.value;

    // 기존 로컬스토리지에 값이 저장되어 있었다면 todoContents에 로컬스토리지 값을 넣고 함수 실행
    if (storageData) {
        todoContents = storageData.contents;
    }

    // TodoList html 요소 생성

    const newLi = document.createElement('li');
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    const newI = document.createElement('i');

    // 버튼에 클릭 이벤트 함수 추가. 버튼 클릭시 li에 complete 클래스 추가 + 로컬 스토리지 저장
    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
        saveItemsFn();
    })

    // 삭제 아이콘에 클릭 이벤트 함수 추가. 아이콘 클릭시 li 삭제 + 로컬 스토리지 저장
    newI.addEventListener('click', () => {
        newLi.remove();
        saveItemsFn();
    })

    // 옵셔널 체이닝(?) 을 사용해서 storageData가 존재할때만 조건 체크
    if (storageData?.complete) {
        // storageData의 complete 가 true일때 li에 complete 클래스 추가
        newLi.classList.add('complete');
    }

    // TodoList 의 html 요소를 정리하고 필요한값을 삽입
    /* <li>
        <div>
            <span></span>
            <button></button>
        </div>
        <i class='fa-solid fa-x'></i>
        </li> 형태 */
    newSpan.textContent = todoContents;
    newI.className = ('fa-solid fa-x');
    todoList.appendChild(newLi);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(newSpan);
    newLi.append(newDiv);
    newLi.appendChild(newI);
    // 사용자 입력 창 비우기
    todoInput.value = "";
    saveItemsFn();
}

// Enter 키 입력 체크 함수
const keyCodeCheck = () => {
    // keyCode 13 = Enter and 빈칸이 아닐때 리스트 생성
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo();
    }
}

// 전체 삭제 함수
const deleteAll = () => {
    // 존재하는 모든 li 태그를 선택하여 liList에 저장
    const liList = document.querySelectorAll('li');
    // li 태그 개수만큼 반복
    for (let i = 0; i < liList.length; i++) {
        // 순차적으로 삭제
        liList[i].remove();
    }
    saveItemsFn();
}

// 로컬 스토리지에 리스트를 저장하는 함수
const saveItemsFn = () => {
    // 로컬 스토리지에 저장할 데이터를 담을 변수
    const saveItems = [];

    // todoList 개수만큼 반복
    for (let i = 0; i < todoList.children.length; i++) {
        // 객체 형태로 todoList의 내용과 complete 여부를 저장
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete'),
        }
        saveItems.push(todoObj);
    }

    // 아래에 있는 조건문을 삼항 연산자를 통해 동일하게 구현
    saveItems.length === 0
        ? localStorage.removeItem('saved-items')
        : localStorage.setItem('saved-items', JSON.stringify(saveItems));

    // saveItems에 요소가 있다면 로컬스토리지에 저장. 없다면 로컬 스토리지 초기화
    // if (saveItems.length === 0) {
    //     localStorage.removeItem('saved-items')
    // } else {
    //     // 로컬 스토리지엔 문자열 형태로만 저장할 수 있기때문에 JSON.stringify 를 통해 객체->문자열 변환
    //     localStorage.setItem('saved-items', JSON.stringify(saveItems));
    // }
}

// 로컬 스토리지에 저장된 값이 있을 경우 todoList 를 생성하는 함수
if (savedTodoList) {
    // 저장된 todoList의 개수만큼 실행
    for (let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i]);
    }
}
