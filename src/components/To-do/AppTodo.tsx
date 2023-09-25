import React, { useState } from 'react';
import TodoNav from './TodoNav';
import TodoList from './TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import styled from './AppTodo.module.css';

const filters = ['all', 'active', 'completed'];

export default function AppTodo() {
  const [filter, setFilter] = useState<string>(filters[0]);


  return (
    <DarkModeProvider>
      <div className={styled.container}>
        <div className={styled.box}>
          <TodoNav
            filter={filter}
            filters={filters}
            onFilterChange={setFilter}
          />
          <TodoList 
            filter={filter}
          />
        </div>
      </div>
    </DarkModeProvider>
  );
}

