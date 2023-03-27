import React, { useState } from 'react';

export default function Counter({ totalCount, onClick }) {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <p>{count} / {totalCount}</p>
      <button className='countBtn'
        onClick={() => {
          setCount((prev) => prev + 1)  // 콜백함수로 이전 값을 인자로 전달해 이전 값 업데이트
          onClick();
        }}
      >Add</button>
    </div>
  );
}

