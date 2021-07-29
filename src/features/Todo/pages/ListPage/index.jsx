import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoList from '../../components/TodoList';

function ListPage(props) {
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

  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilteredStatus(param.status || 'all');
  }, [location.search]);

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
    // setFilteredStatus('all');
    const queryParam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const handleShowCompeletedClick = () => {
    // setFilteredStatus('compeleted');
    const queryParam = { status: 'compeleted' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const handleShowNewClick = () => {
    // setFilteredStatus('new');
    const queryParam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

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

export default ListPage;
