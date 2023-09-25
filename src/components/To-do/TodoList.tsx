import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styled from './TodoList.module.css';

export default function TodoList({ filter }: any) {
  const [todos, setTodos] = useState(() => readTodos());

  const handleAdd = (todo: object) => setTodos([...todos, todo]); 
  const handleUpdate = (updated: any) => setTodos(todos.map((item: any) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted: any) => setTodos(todos.filter((item: any) => item.id !== deleted.id));

  // todo 업데이트마다 local storage에 todos 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styled.container}>
      <ul className={styled.list}>
        {filtered.map((item: any) => (
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

function getFilteredItems(todos: any, filter: any): any {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo: any) => todo.status === filter);
}