const todoForm = document.querySelector(".todo-list-form"),
    todoInput = todoForm.querySelector(".todo-list-input"),
    todoList = document.querySelector(".todo-list-ul")


const TODO_LS = "My TODOS"
let todoArray = []

function saveTodoLS() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoArray))
}

function deleteTodo(event) {
    const clicked = event.target.parentNode
    todoList.removeChild(clicked)
    const newArray = todoArray.filter(function (todo) {
        return todo.id !== JSON.parse(clicked.id)


    })
    todoArray = newArray;
    saveTodoLS();
}

function printTodo(text) {
    const list = document.createElement("li")
    const btn = document.createElement("button")

    btn.addEventListener("click", deleteTodo)
    const content = document.createElement("span")
    content.innerText = text;
    list.appendChild(btn)
    list.appendChild(content)
    todoList.appendChild(list)

    const newId = todoArray.length + 1;
    list.id = newId;

    const todoObj = {
        text: text,
        id: newId
    }
    todoArray.push(todoObj)
    saveTodoLS();
}

function loadTodo() {
    const loadedTodo = localStorage.getItem(TODO_LS)
    if (loadedTodo !== null) {
        console.log(loadedTodo)
        const textPart = JSON.parse(loadedTodo)

        textPart.forEach(function (obj) {
            printTodo(obj.text)
            console.log(textPart, obj.text)
        })

    }

}

function handleSubmit(event) {
    event.preventDefault();
    const myTodo = todoInput.value;
    if(myTodo === ""){
        return
    }
    printTodo(myTodo);
    // saveTodoLS(myTodo);
    todoInput.value = "";
}

function init() {
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit)

}
init();