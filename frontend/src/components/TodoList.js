import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  if (todos.length === 0) {
    return <div className="no-todos">No todos yet. Add one above!</div>;
  }

  return (
    <div className="todo-list">
      <h2>Your Todos</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
