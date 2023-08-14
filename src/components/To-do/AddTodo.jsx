import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [items, setItems] = useState('');

  const handleChange = (e) => setItems(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.trim().length === 0) {
      return;
    }

    onAdd({ id: uuidv4(), text: items, status: 'active' });
    setItems('');
  };

  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <input 
        type="text"
        id='add'
        name='todo'
        value={items}
        placeholder='Add Todo'
        onChange={handleChange}
        className={styled.text}
      />
      <button className={styled.button}>+</button>
    </form>
  );
}

