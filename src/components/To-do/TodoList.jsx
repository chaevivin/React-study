import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styled from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());

  const handleAdd = (todo) => setTodos([...todos, todo]); 
  const handleUpdate = (updated) => setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted) => setTodos(todos.filter((item) => item.id !== deleted.id));

  // todo 업데이트마다 local storage에 todos 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styled.container}>
      <ul className={styled.list}>
        {filtered.map((item) => (
          <Todo 
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo 
        onAdd={handleAdd} 
      />
    </section>
  );
}

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}