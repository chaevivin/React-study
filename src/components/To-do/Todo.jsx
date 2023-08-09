import React from 'react';
import { BiSolidTrash } from 'react-icons/bi';
import styled from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const {id, text, status} = todo;

  const handleChange = (e) => {
    onUpdate({ ...todo, stauts: e.target.checked ? 'completed' : 'active' });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styled.item}>
      <input 
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
        className={styled.checkBox}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete} className={styled.button}><BiSolidTrash /></button>
    </li>
  );
}

