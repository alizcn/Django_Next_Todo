import React, { useState, useEffect } from 'react';
import { todoApi } from '../services/todoService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await todoApi.getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todo) => {
    try {
      const newTodo = await todoApi.createTodo(todo);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const todoToToggle = todos.find((todo) => todo.id === id);
      const updatedTodo = await todoApi.updateTodo(id, {
        ...todoToToggle,
        completed: !todoToToggle.completed,
      });
      
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  if (loading) return <div className="loading">Loading todos...</div>;

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoApp;
