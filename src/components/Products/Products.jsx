import React, { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
      console.log("success");
      setProducts(data);
    });

    return () => {
      console.log("청소");
    };
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

