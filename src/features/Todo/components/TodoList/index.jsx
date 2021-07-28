import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
};

function TodoList(props) {
    const { todoList } = props;
    return (
        <ul>
            {todoList.map(item => (
                <li key={item.id} >{item.title}</li>
            ))}
        </ul>
    )
}

export default TodoList;