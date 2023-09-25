import React from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { useDarkMode } from './context/DarkModeContext';
import styled from './TodoNav.module.css';

interface NavProps {
  filter: string;
  filters: Array<string>;
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoNav({ filter, filters, onFilterChange }: NavProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styled.header}>
      <button onClick={toggleDarkMode} className={styled.changeMode}>
        {darkMode ? <BiSolidSun className={styled.sun} /> : <BiSolidMoon />}
      </button>
      <ul className={styled.filters}>
        {filters.map((value: string, index: number) => <li key={index}>
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

