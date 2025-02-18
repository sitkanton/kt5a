import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [newItemTitle, setNewItemTitle] = React.useState('');

  const handleAddItem = () => {
    if (newItemTitle.trim()) {
      dispatch(addItem(newItemTitle));
      setNewItemTitle('');
    }
  };


};

export default Cart;