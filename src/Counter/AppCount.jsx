import React, { useState } from 'react';
import Counter from './Counter';

export default function AppCount() {
  const [totalCount, setTotalCount] = useState(0);  // 컴포넌트의 공통 데이터는 부모 컴포넌트에 두기
  const handleClick = () => setTotalCount((prev) => prev + 1);  // 전체 count 업데이트

  return (
    <div className='appCount'>
      <div className="totalCount">
        Total Count {totalCount} {totalCount >= 10 ? '🔥' : '❄'}  
      </div>
      <Counter totalCount={totalCount} onClick={handleClick} />
      <Counter totalCount={totalCount} onClick={handleClick} />
    </div>
  );
}

