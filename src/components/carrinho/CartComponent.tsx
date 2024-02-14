import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, clearCart } from '../../slices/CartSlices';
import "./CartComponent.css"

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (item: string) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <div>
      <h1>Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho esta vazio</p>
      ) : (
        <div className='item-cart'>
          {cartItems.map((item, index) => (
            <div key={index}>
             <img src={item} alt='Imagem de um gato'/> 
             <div className='btns-card'>
               <button onClick={() => handleRemoveFromCart(item)} className='remove-btn'>Remove</button>
               <button className='baixar-btn'>Baixar</button>
             </div>
              
            </div>
          ))}
        </div>
      )}
      <button onClick={handleClearCart} className='remove-btn'>Esvaziar carrinho</button>
      </div>
    </div>
  );
}

export default Cart;