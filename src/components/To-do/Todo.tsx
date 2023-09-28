import React from 'react';
import { BiSolidTrash } from 'react-icons/bi';
import styled from './Todo.module.css';

interface todoType {
  id: string;
  text: string;
  status: string;
}

interface TodoParamType {
  todo: todoType;
  onUpdate: () => object;
  onDelete: () => object;
}

export default function Todo({ todo, onUpdate, onDelete }: any) {
  const {id, text, status} = todo;

  const handleChange = (e: { target: { checked: any; }; }) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styled.item}>
      <input 
        type="checkbox" 
        id={id}
        checked={status === 'completed'} 
        onChange={handleChange}
        className={styled.checkbox}
      />
      <label htmlFor={id} className={styled.text}>{text}</label>
      <button onClick={handleDelete} className={styled.button}><BiSolidTrash /></button>
    </li>
  );
}

