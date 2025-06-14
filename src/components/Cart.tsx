import React from 'react';
import { Product } from './ProductList';
import styles from './Cart.module.css';

type CartItem = Product & { quantity: number };

type Props = {
  cartItems: CartItem[];
  removeOneUnit: (id: number) => void;
  removeAllUnits: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeOneUnit, removeAllUnits }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.mainProductsContainer}>
      <h2 className={styles.cartTitle}>Carrinho de Compras</h2>
      <div>
        {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
            ) : (
                <div>
                    <div className={styles.productsContainer}>
                        {cartItems.map(item => (
                            <div key={item.id} className={styles.products}>
                                <h3>{item.name}</h3>
                                <p>Preço Unitário: <span>R${item.price}</span></p>
                                <p>Quantidade: <span>{item.quantity}</span></p>
                                <p>Subtotal: <span>R${item.price * item.quantity}</span></p>
                                
                                <div className={styles.btns}>
                                  <button className={`btn ${styles.btnRemove}`} onClick={() => removeOneUnit(item.id)}>Remover 1 unidade</button>
                                  <button className={`btn ${styles.btnRemove}`} onClick={() => removeAllUnits(item.id)}>Remover todos</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {cartItems.length > 0 && (
                        <p className={styles.total}>Total: R${total}</p>
                    )}
                </div>
            )}
      </div>
    </div>
)};

export default Cart;