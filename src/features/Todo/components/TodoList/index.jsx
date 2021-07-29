import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classNames from 'classnames';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
};

function TodoList(props) {
    const { todoList, onTodoClick } = props;

    const handleTodoClick = (todo, idx) => {
        if(!onTodoClick) return;
        
        onTodoClick(todo, idx);
    }

    return (
        <ul>
            {todoList.map( (todo, idx) => (
                <li 
                className={classNames({
                    'todo-item' : true,
                    'compeleted': todo.status === 'compeleted'
                })}
                onClick={() => handleTodoClick(todo, idx)}
                key={todo.id} 
                >{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList;