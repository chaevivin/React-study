import React from 'react';

export default function AppProducts() {
  return (
    <div>
      <input 
        type="checkbox"
        id="saleProducts"
        name="saled"
        value="yes"
      />
      <label for="saleProducts">세일 품목 보기</label>
    </div>
  );
}

