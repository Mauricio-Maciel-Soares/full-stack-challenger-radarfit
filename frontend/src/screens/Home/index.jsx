import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './styles.module.css';

export function UserInterface() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchApi() {
      const { data } = await axios.get('http://localhost:3000/produtos');
      setProduct(data);
    }
    fetchApi();
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
  };

  return (
    <>
      <form className={styles.header}>
        <input
          type="text"
          name="productName"
          value={product}
          onChange={onChange}
          />

        <button type='submit'>
          <label>Buscar por um Produto</label>
        </button>
      </form>
      <div className={styles.container}>
        <h2>Produtos</h2>
        <div className={styles.products}>
          {product.map(item => (
            <div key={item._id} className={styles.product}>
              <h4>{item.produto}</h4>
              <h4>{`R$ ${item.valor}`}</h4>
            </div>
          ))}
          
        </div>
      </div>
    </>
  )
}