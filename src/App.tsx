import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {
    // BILL
    const todolistTitle_1: string = "What to learn"
    const todolistTitle_2: string = "What to buy"
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: false, title: "JS"},
        {id: 3, isDone: true, title: "React"}
    ]

    const tasks_2: Array<TaskType> = [
        {id: 4, isDone: true, title: "Bread"},
        {id: 5, isDone: true, title: "Chocolate"},
        {id: 6, isDone: false, title: "Coffe"}
    ]

    // UI
    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={tasks_1}/>
            <Todolist title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
