import React from 'react';
import CardItem from './CardItem';
import { useGlobalContext } from './context';

function CardConatiner() {
    const {cardItems, loading, clearCart, total} = useGlobalContext();
    if(loading){
        return (
            <section className='cart'>
    <header>
        <h2>Loading...</h2>
    </header>
    </section>
        );
    }
    if(cardItems.length === 0){
        return (
    <section className='cart'>
    <header>
        <h2>your bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
    </header>
    </section>
        );
    }
  return (
   <section className='cart'>
    <header>
        <h2>your bag</h2>
    </header>
    <div>
        {cardItems.map((item) =>{
            return(
                <CardItem key={item.id} {...item} />
            );
        })}
    </div>
    <footer>
        <hr />
        <div className='cart-total'>
            <h4>total <span>${total}</span></h4>
        </div>
        <button onClick={clearCart} className='btn clear-btn'>clear cart</button>
    </footer>
   </section>
  )
}

export default CardConatiner