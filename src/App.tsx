import { useState } from 'react';
import ProductList, { Product } from './components/ProductList';
import Cart from './components/Cart';
import './global.css';

type CartItem = Product & { quantity: number };

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeOneUnit = (id: number) => {
    setCart(prevCart => {
    return prevCart.flatMap(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return [{ ...item, quantity: item.quantity - 1 }];
        } else {
          return [];
        }
      }
      return [item];
    });
  });
};

const removeAllUnits = (id: number) => {
  setCart(prevCart => prevCart.filter(item => item.id !== id));
};

  return (
    <div className="mainContainer">
      <h1>Teste Tgid Loja Online</h1>
      <ProductList addToCart={addToCart} />
      <Cart 
        cartItems={cart} 
        removeOneUnit={removeOneUnit}
        removeAllUnits={removeAllUnits} 
      />
    </div>
  );
}

export default App;
