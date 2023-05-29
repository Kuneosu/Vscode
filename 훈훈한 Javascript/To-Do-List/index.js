let todoInput = document.getElementById('todo__input');
const todoList = document.getElementById('todo__list');
const createTodo = () => {

    const newLi = document.createElement('li');
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    const newI = document.createElement('i');

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
    })

    newI.addEventListener('click', () => {
        newLi.remove();
    })

    newSpan.textContent = todoInput.value;
    newI.className = ('fa-solid fa-x');
    todoList.appendChild(newLi);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(newSpan);
    newLi.append(newDiv);
    newLi.appendChild(newI);
    todoInput.value = "";
    console.log(newLi);
    saveItemsFn();
}

const keyCodeCheck = () => {
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo();
    }
}

const deleteAll = () => {
    const liList = document.querySelectorAll('li');
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
}

const saveItemsFn = () => {
    const saveItems = [];

    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete'),
        }
        saveItems.push(todoObj);
    }
    console.log(saveItems);
}