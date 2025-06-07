import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  const { id, title, description, completed, created_at } = todo;
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <div className="todo-check">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(id)}
            id={`todo-${id}`}
          />
          <label htmlFor={`todo-${id}`} className="todo-title">
            {title}
          </label>
        </div>
        <button 
          className="btn-delete"
          onClick={() => onDeleteTodo(id)}
          aria-label="Delete todo"
        >
          &times;
        </button>
      </div>
      
      {description && <p className="todo-description">{description}</p>}
      
      <div className="todo-footer">
        <span className="todo-date">Created: {formatDate(created_at)}</span>
      </div>
    </div>
  );
}

export default TodoItem;
