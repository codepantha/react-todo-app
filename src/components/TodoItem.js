import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

function TodoItem({ deleteTodoProps, handleChangeProps, todo }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>
        {todo.title}
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(Object).isRequired,
};

export default TodoItem;
