import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem, addItem } from './features/cartSlice';
import './App.css';

function App() {
  const cart = useSelector((state) => state.cart.cart); 
  const dispatch = useDispatch(); 

  const [newItemName, setNewItemName] = useState(''); 

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleAddItem = () => {
    if (newItemName.trim()) {
      dispatch(addItem({ title: newItemName })); 
      setNewItemName(''); 
    } else {
      alert('Введите название товара!');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Моя корзина покупоcheck 🛒</h1>
        <div className="add-product">
          <input
            type="text"
            placeholder="Введите название товара"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="product-input"
          />
          <button className="add-item-btn" onClick={handleAddItem}>
            Добавить
          </button>
        </div>
      </header>

      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">Корзина пуста... 😔</div>
        ) : (
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-title">{item.title}</span> {/* Отображаем имя товара */}
                  <div className="item-actions">
                    <button onClick={() => handleIncrement(item.id)} className="btn btn-increment">+</button>
                    <span className="item-count">{item.count}</span>
                    <button onClick={() => handleDecrement(item.id)} className="btn btn-decrement">-</button>
                    <button onClick={() => handleRemove(item.id)} className="btn btn-remove">🗑️</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
