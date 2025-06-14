import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';

export type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  addToCart: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('http://localhost:3001/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Erro ao carregar produtos:', error));
  }, []);

  return (
    <div className={styles.mainProductsContainer}>
      <h2>Lista de Produtos</h2>
      <div className={styles.productsContainer}>
        {products.map((product) => (
            <div key={product.id} className='products'>
                <h3>{product.name}</h3>
                <p>Preço: <span>R${product.price}</span></p>
                <button className={`btn ${styles.btnAdd}`} onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;