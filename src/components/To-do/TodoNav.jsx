import React from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { useDarkMode } from './context/DarkModeContext';
import styled from './TodoNav.module.css';

export default function TodoNav({ filter, filters, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styled.header}>
      <button onClick={toggleDarkMode} className={styled.changeMode}>
        {darkMode ? <BiSolidSun className={styled.sun} /> : <BiSolidMoon />}
      </button>
      <ul className={styled.filters}>
        {filters.map((value, index) => <li key={index}>
          <button 
            onClick={() => onFilterChange(value)}
            className={`${styled.filter} ${filter === value && styled.active}`}
          >
            {value}
          </button>
        </li>)}
      </ul>
    </header>
  );
}
