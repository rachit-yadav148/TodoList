import { useState } from "react";
import "./TodoList.css";

export default function Todolist() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (index) => {
        let updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    let toggleCompletion = (index) => {
        let updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className={todo.completed ? "completed" : ""}>
                            {todo.text}
                        </span>
                        <button  className="done-btn" onClick={() => toggleCompletion(index)}>Done</button>
                        <button onClick={() => deleteTodo(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
