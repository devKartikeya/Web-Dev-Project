const add_button = document.getElementById('add');
const Todos = document.getElementById('Todos');
let todos = [];
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadTodos() {
    todos = JSON.parse(localStorage.getItem("todos") || "[]");
    renderTodos();
}
function renderTodos() {
    Todos.innerHTML = "";
    todos.forEach(todo => {
        const list = document.createElement("li");
        list.classList.add("list");
        if (todo.completed)
            list.classList.add("completed");
        list.textContent = todo.text;
        // Actions
        const actions = document.createElement("div");
        actions.classList.add("actions");
        const completeBtn = document.createElement("button");
        completeBtn.textContent = todo.completed ? "Undo" : "Complete";
        completeBtn.classList.add("complete");
        completeBtn.onclick = () => toggleComplete(todo.id);
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.onclick = () => editTodo(todo.id);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => deleteTodo(todo.id);
        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        list.appendChild(actions);
        Todos.appendChild(list);
    });
}
function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
}
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo)
        return;
    const newText = prompt("Edit your todo:", todo.text);
    if (newText && newText.trim() !== "") {
        todo.text = newText;
        saveTodos();
        renderTodos();
    }
}
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
}
function toggleComplete(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}
add_button.addEventListener('click', () => {
    const todoText = prompt("Enter your todo:");
    if (todoText && todoText.trim() !== "") {
        addTodo(todoText);
    }
});
// Initialize
loadTodos();
export {};
//# sourceMappingURL=app.js.map