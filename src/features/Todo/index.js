import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'compeleted',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoList = (todo, idx) => {
    // clone current array to the new array
    const newTodoList = [...todoList];

    // toggle state
    console.log(todo, idx);

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'compeleted' : 'new',
    };

    newTodoList[idx] = newTodo;

    // update todolist
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };

  const handleShowCompeletedClick = () => {
    setFilteredStatus('compeleted');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  console.log(renderedTodoList);

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoList} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompeletedClick}>Show Compeleted</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
