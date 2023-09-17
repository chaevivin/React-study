import React, { useState } from 'react';
import styled from './AppCount.module.css';

interface CounterProps {
  totalCount: number;
  onClick: any;
}

export default function Counter({ totalCount, onClick }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styled.counter}>
      <p>{count} / {totalCount}</p>
      <button className={styled.countBtn}
        onClick={() => {
          setCount((prev) => prev + 1)  // 콜백함수로 이전 값을 인자로 전달해 이전 값 업데이트
          onClick();
        }}
      >Add</button>
    </div>
  );
}

