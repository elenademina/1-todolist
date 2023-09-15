import React, {FC} from 'react';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string
}

export const Todolist: FC<TodolistPropsType> = (
    // ниже несколько вариантов деструктуризации объекта:
    // деструктуризация - это разделение объекта на независимые переменные
    // 3.
    {
        title,
        tasks
    }) => {
    // 1.
    // const title = props.title
    // const tasks = props.task
    // 2.
    // const{title, tasks} = props

    return (
        <div>
            <div className="todolist">
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li key={tasks[0].id}>
                        <input type="checkbox" checked={tasks[0].isDone}/>
                        <span>{tasks[0].title}</span>
                    </li>
                    <li key={tasks[1].id}>
                        <input type="checkbox" checked={tasks[1].isDone}/>
                        <span>{tasks[1].title}</span>
                    </li>
                    <li key={tasks[2].id}>
                        <input type="checkbox" checked={tasks[2].isDone}/>
                        <span>{tasks[2].title}</span>
                    </li>
                 </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};
