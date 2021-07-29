import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'compeleted'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] =  useState(initTodoList);

    const handleTodoList = (todo, idx) => {
        // clone current array to the new array
        const newTodoList = [...todoList];

        // toggle state
        console.log(todo, idx);
        
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'compeleted' : 'new'
        }

        newTodoList[idx] = newTodo;

        // update todolist
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList} onTodoClick={handleTodoList}/>
        </div>
    );
}

export default TodoFeature;